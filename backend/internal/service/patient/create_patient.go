package patientService

import (
	"context"
	patientModel "his/internal/model/patient"
)

func (s *patientService) Create(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, error) {
	result, err := s.repo.CreatePatient(ctx, patient)
	if err != nil {
		return patientModel.Patient{}, err
	}

	return result, nil
}
