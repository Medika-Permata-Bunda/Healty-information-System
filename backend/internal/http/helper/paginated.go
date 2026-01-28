package helper

import (
	pages "his/pkg/page"
	"his/pkg/response"
	"net/http"
)

func Paginated(w http.ResponseWriter, r *http.Request, handle func(page int, size int, offsite int, keyword string) (any, int, error)) {

	// Rate limiter
	// if !middleware.RateLimiter(r, 1, 1) {
	// 	response.Message("Too many requests.", "The demand for resources has already reached its maximum", "WARN", 429, w, r)
	// 	return
	// }

	page, size, offsite, keyword := pages.PaginationParamater(r)

	result, total, err := handle(page, size, offsite, keyword)
	if err != nil {
		return
	}

	responseData := pages.PaginationResponse(result, page, size, total, keyword)
	response.JSONPaginated(responseData.Result, responseData.Meta, "success", "INFO", w, r)
}
