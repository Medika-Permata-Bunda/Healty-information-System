package errorhttp

import (
	"context"
	"errors"
	"net/http"

	"github.com/jackc/pgx/v5/pgconn"
	"gorm.io/gorm"
)

func Map(err error) (string, string, int) {
	switch {
	case errors.Is(err, context.DeadlineExceeded):
		return "request time out", "ERROR", http.StatusRequestTimeout

	case errors.Is(err, gorm.ErrDuplicatedKey):
		return "duplicate entry", "WARN", http.StatusBadRequest

	default:
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) {
			switch pgErr.Code {
			case "23505":
				return "duplicate entry", "WARN", http.StatusBadRequest
			}
		}

		return "failed", "WARN", http.StatusBadRequest
	}
}
