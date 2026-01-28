package helper

import (
	"his/pkg/response"
	"his/pkg/util"
	"net/http"
)

func Post[T any, R any](w http.ResponseWriter, r *http.Request, handle func(T) (R, string, error)) {

	// Rate limiter
	// if !middleware.RateLimiter(r, 1, 1) {
	// 	response.Message("Too many requests.", "The demand for resources has already reached its maximum", "WARN", 429, w, r)
	// 	return
	// }

	requestBody, err := util.BodyDecoder[T](r)
	if err != nil {
		response.Message("failed decode body", err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	responseData, message, err := handle(requestBody)
	if err != nil {
		return
	}

	response.JSON(responseData, message, "INFO", http.StatusCreated, w, r)
}
