package patientRepo

import (
	"context"
	patientModel "his/internal/model/patient"

	"gorm.io/gorm"
)

type patientRepository struct {
	db *gorm.DB
}

type PatientRepository interface {
	CreatePatient(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, error)
	GetPatientAll(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, error)
	DeletePatient(ctx context.Context, id string) error
}

func InitPatientRepostory(db *gorm.DB) PatientRepository {
	return &patientRepository{db: db}
}
