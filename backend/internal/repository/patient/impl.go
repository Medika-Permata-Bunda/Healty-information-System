package patientRepo

import (
	patientModel "his/internal/model/patient"

	"gorm.io/gorm"
)

type patientRepository struct {
	db *gorm.DB
}

type PatientRepository interface {
	CreatePatient(patient *patientModel.Patient) (patientModel.Patient, error)
	GetPatientAll(page, size int, keyword string) ([]patientModel.Patient, int, error)
	DeletePatient(id string) error
}

func InitPatientRepostory(db *gorm.DB) PatientRepository {
	return &patientRepository{db: db}
}
