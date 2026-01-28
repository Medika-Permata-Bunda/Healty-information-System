package patientHandle

import (
	"context"
	errorhttp "his/internal/http/error"
	"his/internal/http/helper"
	patientService "his/internal/service/patient"
	"his/pkg/response"
	"net/http"
	"time"

	"gorm.io/gorm"
)

func HandlePrefix(db *gorm.DB, serv patientService.PatientService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodDelete:
			helper.Delete("/patient/", w, r, func(s string) {
				ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
				defer cancel()

				if err := serv.Delete(ctx, s); err != nil {
					message, typeErr, code := errorhttp.Map(err)
					response.Message(message, err.Error(), typeErr, code, w, r)
					return
				}
			})
		}
	}
}
