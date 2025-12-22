package service

import (
	"database/sql"
	"his/internal/model"
	"his/internal/repository"
)

type patientService struct {
	db *sql.DB
}

type PatientService interface {
	AddPatientService(data model.Patient) (string, error)
	// Add function in here
}

func NewPatientService(db *sql.DB) PatientService {
	return &patientService{db}
}

// Write code in here
func (q *patientService) AddPatientService(data model.Patient) (string, error) {
	if err := repository.NewPatientRepository(q.db).AddPatient(data); err != nil {
		return "failed add data", err
	}

	return "success", nil
}
