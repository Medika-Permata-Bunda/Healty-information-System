package patientRepo

import (
	"context"
	patientModel "his/internal/model/patient"
)

func (q *patientRepository) DeletePatient(ctx context.Context, mr string) error {
	if err := q.db.WithContext(ctx).Model(&patientModel.Patient{}).Where("medical_record = ?", mr).Update("is_deleted", true).Error; err != nil {
		return err
	}

	return nil
}
