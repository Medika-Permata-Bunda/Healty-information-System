package service

import (
	"database/sql"
	"his/internal/model"
	"his/internal/repository"
)

type patientService struct {
	db   *sql.DB
	repo repository.PatientRepository
}

type PatientService interface {
	// Add function in here
	ShowPatientService(page, size int, keyword string) ([]model.PatientResponse, int, string, error)
	CreatePatientService(data model.PatientRequest) (string, error)
}

func NewPatientService(db *sql.DB, repo repository.PatientRepository) PatientService {
	return &patientService{db, repo}
}

// Write code in here
func (q *patientService) ShowPatientService(page, size int, keyword string) ([]model.PatientResponse, int, string, error) {
	res, count, err := q.repo.ShowPatient(page, size, keyword)
	if err != nil {
		return nil, 0, "error get data", err
	}

	return res, count, "success", nil
}

func (q *patientService) CreatePatientService(data model.PatientRequest) (string, error) {
	if err := q.repo.CreatePatient(data); err != nil {
		return "error create data", err
	}

	return "success", nil
}
