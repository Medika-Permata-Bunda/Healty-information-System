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
	CreatePatientService(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, string, error)
	GetAllPatientService(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, string, error)
	DeletePatientService(ctx context.Context, mr string) (string, error)
}

func InitPatientService(repo patientRepo.PatientRepository) PatientService {
	return &patientService{repo: repo}
}
