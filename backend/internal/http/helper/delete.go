package helper

import (
	"his/pkg/response"
	"his/pkg/util"
	"net/http"
)

func Delete(path string, w http.ResponseWriter, r *http.Request, handle func(string)) {

	// Rate limiter
	// if !middleware.RateLimiter(r, 1, 1) {
	// 	response.Message("Too many requests.", "The demand for resources has already reached its maximum", "WARN", 429, w, r)
	// 	return
	// }

	param, err := util.ParamStr(r, path)
	if err != nil {
		response.Message("invalid parameter", err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	handle(param)

	response.Message("success", "success", "INFO", http.StatusOK, w, r)
}
