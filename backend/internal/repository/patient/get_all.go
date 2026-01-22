package patientRepo

import (
	"context"
	patientModel "his/internal/model/patient"
)

func (q *patientRepository) GetPatientAll(ctx context.Context, page, size int, keyword string) ([]patientModel.Patient, int, error) {
	var (
		result []patientModel.Patient
		total  int64
	)

	if err := q.db.WithContext(ctx).Model(&patientModel.Patient{}).Where("is_deleted = false").Where("name ILIKE ?", "%"+keyword+"%").Count(&total).Error; err != nil {
		return nil, 0, err
	}

	if err := q.db.WithContext(ctx).Model(&patientModel.Patient{}).Where("is_deleted = false").Where("name ILIKE ?", "%"+keyword+"%").Offset(page).Limit(size).Find(&result).Error; err != nil {
		return nil, 0, err
	}

	return result, int(total), nil
}
