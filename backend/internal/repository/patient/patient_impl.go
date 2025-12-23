package patient

import (
	"database/sql"
	"his/internal/model"
)

type patientRepository struct {
	db *sql.DB
}

type PatientRepository interface {
	AddPatient(data model.Patient) error
	PaginationPatient(page, size int, keyword string) ([]model.PatientResult, int, error)
	// Add function in here
}

func NewPatientRepository(db *sql.DB) PatientRepository {
	return &patientRepository{db}
}
