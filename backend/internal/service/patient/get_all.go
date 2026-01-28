package patientService

import (
	"context"
	patientModel "his/internal/model/patient"
)

func (s *patientService) GetPaginated(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, error) {
	result, total, err := s.repo.GetPatientAll(ctx, page, size, keyword)
	if err != nil {
		return nil, 0, err
	}

	return result, total, nil
}
