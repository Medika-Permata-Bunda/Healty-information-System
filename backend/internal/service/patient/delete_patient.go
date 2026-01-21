package patientService

func (s *patientService) DeletePatientService(mr string) (string, error) {
	if err := s.repo.DeletePatient(mr); err != nil {
		return "failed delete data", err
	}

	return "success", nil
}
