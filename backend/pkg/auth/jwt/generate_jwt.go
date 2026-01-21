package jwt

import (
	"os"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

var jwtKey = []byte(os.Getenv("JWT_SECURE_KEY")) // Use a strong, secure key

type Claims struct {
	Username string    `json:"username"`
	Name     string    `json:"name"`
	Role     string    `json:"role"`
	Exp      time.Time `json:"expired"`
	jwt.RegisteredClaims
}

func GenerateJWT(user string) (string, time.Time, error) {
	exp, _ := strconv.Atoi(os.Getenv("JWT_EXPIRED_HOUR"))
	expirationTime := time.Now().Add(time.Duration(exp) * time.Hour)

	claims := &Claims{
		Username: user,
		Exp:      expirationTime,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Issuer:    os.Getenv("APP_NAME"),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", time.Time{}, err
	}

	return tokenString, expirationTime, nil
}
