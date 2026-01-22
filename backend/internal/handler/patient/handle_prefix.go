package patientHandle

import (
	"context"
	patientService "his/internal/service/patient"
	"his/pkg/response"
	"his/pkg/util"
	"net/http"
	"time"

	"gorm.io/gorm"
)

func HandlePrefix(db *gorm.DB, serv patientService.PatientService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodDelete:
			delete(w, r, serv)
		}
	}
}

func delete(w http.ResponseWriter, r *http.Request, serv patientService.PatientService) {
	param, err := util.ParamStr(r, "/patient/")
	if err != nil {
		response.ResponseMessage("invalid parameter", err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
	defer cancel()

	message, err := serv.DeletePatientService(ctx, param)
	if err != nil {
		response.ResponseMessage(message, err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	response.ResponseMessage(message, message, "INFO", http.StatusOK, w, r)
}
