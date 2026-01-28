package patientService

import (
	"context"
)

func (s *patientService) Delete(ctx context.Context, mr string) error {
	if err := s.repo.DeletePatient(ctx, mr); err != nil {
		return err
	}

	return nil
}
