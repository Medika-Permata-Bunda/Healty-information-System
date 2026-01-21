package patientService

import patientModel "his/internal/model/patient"

func (s *patientService) CreatePatientService(patient *patientModel.Patient) (patientModel.Patient, string, error) {
	result, err := s.repo.CreatePatient(patient)
	if err != nil {
		return patientModel.Patient{}, "failed create patient", err
	}

	return result, "success", nil
}
