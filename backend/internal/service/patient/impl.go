package patientService

import (
	patientModel "his/internal/model/patient"
	patientRepo "his/internal/repository/patient"
)

type patientService struct {
	repo patientRepo.PatientRepository
}

type PatientService interface {
	CreatePatientService(patient *patientModel.Patient) (patientModel.Patient, string, error)
	GetAllPatientService(page, size int, keyword string) ([]patientModel.Patient, int, string, error)
	DeletePatientService(mr string) (string, error)
}

func InitPatientService(repo patientRepo.PatientRepository) PatientService {
	return &patientService{repo: repo}
}
