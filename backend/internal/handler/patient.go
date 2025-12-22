package handler

import (
	"database/sql"
	"encoding/json"
	"his/internal/model"
	"his/internal/service"
	logging "his/pkg/logging"
	"his/pkg/middleware"
	"his/pkg/util"
	"net/http"
)

func PatientController(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		switch r.Method {
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

			mess, err := service.NewPatientService(db).AddPatientService(body)
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
