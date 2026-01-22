package patientService

import (
	"context"
	"errors"
	patientModel "his/internal/model/patient"
)

func (s *patientService) GetAllPatientService(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, string, error) {
	result, total, err := s.repo.GetPatientAll(ctx, page, size, keyword)
	if err != nil {
		if errors.Is(err, context.DeadlineExceeded) {
			return nil, 0, "request time out", err
		}

		return nil, 0, "failed get data", err
	}

	return result, total, "success", nil
}
