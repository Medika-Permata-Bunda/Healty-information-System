package patient

import (
	"his/internal/model"
	patientRepo "his/internal/repository/patient"
)

func (q *patientService) AddPatientService(data model.Patient) (string, error) {
	if err := patientRepo.NewPatientRepository(q.db).AddPatient(data); err != nil {
		return "failed add data", err
	}

	return "success", nil
}
