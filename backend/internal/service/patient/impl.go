package patientService

import (
	"context"
	patientModel "his/internal/model/patient"
	patientRepo "his/internal/repository/patient"
)

type patientService struct {
	repo patientRepo.PatientRepository
}

type PatientService interface {
	Create(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, error)
	GetPaginated(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, error)
	Delete(ctx context.Context, mr string) error
}

func InitPatientService(repo patientRepo.PatientRepository) PatientService {
	return &patientService{repo: repo}
}
