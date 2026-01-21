package patientRepo

import patientModel "his/internal/model/patient"

func (q *patientRepository) CreatePatient(patient *patientModel.Patient) (patientModel.Patient, error) {
	if err := q.db.Create(&patient).Error; err != nil {
		return patientModel.Patient{}, err
	}

	return *patient, nil
}
