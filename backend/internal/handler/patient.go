package handler

import (
	"database/sql"
	"encoding/json"
	"his/internal/model"
	patientService "his/internal/service/patient"
	logging "his/pkg/logging"
	"his/pkg/middleware"
	"his/pkg/page"
	"his/pkg/util"
	"net/http"
)

func PatientController(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		switch r.Method {
		case "GET":
			showPatient(db)(w, r)
		case "POST":
			addPatient(db)(w, r)
		default:
			res, _ := json.Marshal(model.ResponseMessage{Status: "failed", Message: "method not allowed"})
			logging.Log("Warning : method not allowed", "WARN", r)
			w.WriteHeader(405)
			w.Write(res)
		}

	}
}

func showPatient(db *sql.DB) http.HandlerFunc {
	return middleware.CORS(
		middleware.RateLimiter(1, 1, func(w http.ResponseWriter, r *http.Request) {
			param := r.URL.Query()
			keyword := param.Get("keyword")

			size := page.ParamPagination("size", 15, r)
			pg, offsite := page.ParamOffset(size, r)

			data, mess, count, err := patientService.NewPatientService(db).PaginationPatientService(offsite, size, keyword)
			if err != nil {
				res, _ := json.Marshal(model.ResponseMessage{Status: "failed", Message: mess})
				logging.Log("Error :"+err.Error(), "ERROR", r)
				w.WriteHeader(400)
				w.Write(res)

				return
			}

			// Create pagination link
			// PaginationLink(page, size, count int, keyword string)
			previousLink, nextLink := page.PaginationLink(pg, size, count, keyword)

			rec := model.PaginationResponse{
				Result: data,
				Meta: model.PaginationMeta{
					TotalData: count,
					Page:      pg,
					Size:      size,
					Previous:  previousLink,
					Next:      nextLink,
				},
			}

			res, _ := json.Marshal(rec)
			logging.Log(mess, "INFO", r)
			w.WriteHeader(200)
			w.Write(res)
		}),
	)
}

func addPatient(db *sql.DB) http.HandlerFunc {
	return middleware.CORS(
		middleware.RateLimiter(1, 1, func(w http.ResponseWriter, r *http.Request) {
			// Write code in here
			body, err := util.BodyDecoder[model.Patient](r)
			if err != nil {
				res, _ := json.Marshal(model.ResponseMessage{Status: "failed", Message: "error decode json"})
				logging.Log("Error :"+err.Error(), "ERROR", r)
				w.WriteHeader(500)
				w.Write(res)

				return
			}

			mess, err := patientService.NewPatientService(db).AddPatientService(body)
			if err != nil {
				res, _ := json.Marshal(model.ResponseMessage{Status: "failed", Message: mess})
				logging.Log("Error :"+err.Error(), "ERROR", r)
				w.WriteHeader(500)
				w.Write(res)

				return
			}

			res, _ := json.Marshal(model.ResponseMessage{Status: "success", Message: "success"})
			logging.Log("message", "INFO", r)
			w.WriteHeader(200)
			w.Write(res)
		}),
	)
}
