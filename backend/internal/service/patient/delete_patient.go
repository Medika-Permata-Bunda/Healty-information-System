package patientService

import (
	"context"
	"errors"
)

func (s *patientService) DeletePatientService(ctx context.Context, mr string) (string, error) {
	if err := s.repo.DeletePatient(ctx, mr); err != nil {
		if errors.Is(err, context.DeadlineExceeded) {
			return "request time out", err
		}

		return "failed delete data", err
	}

	return "success", nil
}
