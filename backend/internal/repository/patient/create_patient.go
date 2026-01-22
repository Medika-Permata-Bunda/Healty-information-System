package patientRepo

import (
	"context"
	patientModel "his/internal/model/patient"
)

func (q *patientRepository) CreatePatient(ctx context.Context, patient *patientModel.Patient) (patientModel.Patient, error) {
	if err := q.db.WithContext(ctx).Create(&patient).Error; err != nil {
		return patientModel.Patient{}, err
	}

	return *patient, nil
}
