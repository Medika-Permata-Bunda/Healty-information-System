package patientRepo

import patientModel "his/internal/model/patient"

func (q patientRepository) DeletePatient(mr string) error {
	if err := q.db.Delete(&patientModel.Patient{}, "medical_record = ?", mr).Error; err != nil {
		return err
	}

	return nil
}
