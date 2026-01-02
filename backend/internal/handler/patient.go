package handler

import (
	"database/sql"
	"his/internal/model"
	"his/internal/repository"
	"his/internal/service"
	"his/pkg/middleware"
	"his/pkg/page"
	"his/pkg/response"
	"his/pkg/util"
	"net/http"
)

// this handler is for URLs that do not have a prefix parameter
// example without prefix -> api/patient
func PatientHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		repo := repository.NewPatientRepository(db)
		serv := service.NewPatientService(db, repo)

		switch r.Method {
		case http.MethodGet:
			// handler(func(w http.ResponseWriter, r *http.Request) {
			param := r.URL.Query()
			keyword := param.Get("keyword")

			size := page.ParamPagination("size", 15, r)
			p, offsite := page.ParamOffset(size, r)

			data, count, mess, err := serv.ShowPatientService(offsite, size, keyword)
			if err != nil {
				response.ResponseMessage(mess, err.Error(), "WARN", 400, w, r)
				return
			}

			// Create pagination link
			previousLink, nextLink := page.PaginationLink(p, size, count, keyword)

			rec := model.PaginationResponse{
				Result: data,
				Meta: model.PaginationMeta{
					TotalData: count,
					Page:      p,
					Size:      size,
					Previous:  previousLink,
					Next:      nextLink,
				},
			}

			response.ResponseBody(rec, "success", "INFO", 200, w, r)
			// })
		case http.MethodPost:
			// handler(func(w http.ResponseWriter, r *http.Request) {
			body, err := util.BodyDecoder[model.PatientRequest](r)
			if err != nil {
				response.ResponseMessage("failed decode body", err.Error(), "ERROR", 500, w, r)
				return
			}

			mess, err := serv.CreatePatientService(body)
			if err != nil {
				response.ResponseMessage(mess, err.Error(), "WARN", 400, w, r)
				return
			}

			response.ResponseMessage("success", "success", "INFO", 200, w, r)
			// })
		default:
			response.ResponseMessage("method not allowed", "method not allowed", "INFO", 405, w, r)
		}

	}
}

// example with prefix -> api/patient/{id}
func PatientHandlerPrefix(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		switch r.Method {
		case http.MethodGet:
			handler(func(w http.ResponseWriter, r *http.Request) {
				// Write code in here
			})
		case http.MethodPut:
			handler(func(w http.ResponseWriter, r *http.Request) {
				// Write code in here
			})
		case http.MethodDelete:
			handler(func(w http.ResponseWriter, r *http.Request) {
				// Write code in here
			})
		default:
			response.ResponseMessage("method not allowed", "method not allowed", "INFO", 405, w, r)
		}

	}
}

// Custom your handler
func handler(next http.HandlerFunc) http.HandlerFunc {
	return middleware.CORS(
		middleware.RateLimiter(1, 1, func(w http.ResponseWriter, r *http.Request) {
			// add more middleware in here
			next(w, r)
		}),
	)
}
