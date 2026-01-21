package patientHandle

import (
	patientRepo "his/internal/repository/patient"
	patientService "his/internal/service/patient"
	"his/pkg/response"
	"his/pkg/util"
	"net/http"

	"gorm.io/gorm"
)

func HandlePrefix(db *gorm.DB) http.HandlerFunc {
	repo := patientRepo.InitPatientRepostory(db)
	serv := patientService.InitPatientService(repo)

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
		response.ResponseMessage("invalid parameter", err.Error(), "ERROR", 400, w, r)
		return
	}

	message, err := serv.DeletePatientService(param)
	if err != nil {
		response.ResponseMessage(message, err.Error(), "ERROR", 400, w, r)
		return
	}

	response.ResponseMessage(message, message, "INFO", 200, w, r)
}
