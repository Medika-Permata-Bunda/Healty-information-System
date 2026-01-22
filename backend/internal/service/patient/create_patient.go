package patientService

import (
	"context"
	"errors"
	patientModel "his/internal/model/patient"

	"github.com/jackc/pgx/v5/pgconn"
	"gorm.io/gorm"
)

func (s *patientService) CreatePatientService(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, string, error) {
	result, err := s.repo.CreatePatient(ctx, patient)
	if err != nil {
		switch {
		case errors.Is(err, context.DeadlineExceeded):
			return patientModel.Patient{}, "request time out", err

		case errors.Is(err, gorm.ErrDuplicatedKey):
			return patientModel.Patient{}, "duplicate entry", err

		default:
			var pgErr *pgconn.PgError
			if errors.As(err, &pgErr) {
				switch pgErr.Code {
				case "23505":
					return patientModel.Patient{}, "duplicate entry", err
				}
			}

			return patientModel.Patient{}, "failed create patient", err
		}
	}

	return result, "success", nil
}
