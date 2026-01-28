package patientHandle

import (
	"context"
	errorhttp "his/internal/http/error"
	"his/internal/http/helper"
	"his/internal/mapper"
	patientModel "his/internal/model/patient"
	patientService "his/internal/service/patient"
	"his/pkg/response"
	"net/http"
	"time"

	"gorm.io/gorm"
)

func Handle(db *gorm.DB, serv patientService.PatientService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			helper.Paginated(w, r, func(page, size, offsite int, keyword string) (any, int, error) {
				ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
				defer cancel()

				result, total, err := serv.GetPaginated(ctx, offsite, size, keyword)
				if err != nil {
					message, typeErr, code := errorhttp.Map(err)
					response.Message(message, err.Error(), typeErr, code, w, r)
					return nil, 0, err
				}

				return mapper.MappingPatientData(result), total, nil
			})
		case http.MethodPost:
			helper.Post(w, r, func(t patientModel.Patient) (patientModel.PatientShow, string, error) {
				ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
				defer cancel()

				result, err := serv.Create(ctx, &t)
				if err != nil {
					message, typeErr, code := errorhttp.Map(err)
					response.Message(message, err.Error(), typeErr, code, w, r)
					return patientModel.PatientShow{}, "", err
				}

				return mapper.MappingPatientSingleData(result), "success", nil
			})
		}
	}
}
