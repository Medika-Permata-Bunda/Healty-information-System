package patientService

import patientModel "his/internal/model/patient"

func (s *patientService) GetAllPatientService(page, size int, keyword string) ([]patientModel.Patient, int, string, error) {
	result, total, err := s.repo.GetPatientAll(page, size, keyword)
	if err != nil {
		return nil, 0, "failed get data", err
	}

	return result, total, "success", nil
}
