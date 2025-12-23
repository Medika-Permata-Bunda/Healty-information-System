package patient

import (
	"his/internal/model"
	patientRepo "his/internal/repository/patient"
)

func (q *patientService) PaginationPatientService(page, size int, keyword string) ([]model.PatientResult, string, int, error) {
	data, count, err := patientRepo.NewPatientRepository(q.db).PaginationPatient(page, size, keyword)
	if err != nil {
		return data, "failed get data", 0, err
	}

	return data, "success", count, nil
}
