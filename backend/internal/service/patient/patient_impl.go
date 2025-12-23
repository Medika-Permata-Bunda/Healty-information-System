package patient

import (
	"database/sql"
	"his/internal/model"
)

type patientService struct {
	db *sql.DB
}

type PatientService interface {
	AddPatientService(data model.Patient) (string, error)
	PaginationPatientService(page, size int, keyword string) ([]model.PatientResult, string, int, error)
	// Add function in here
}

func NewPatientService(db *sql.DB) PatientService {
	return &patientService{db}
}
