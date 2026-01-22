package patientHandle

import (
	"context"
	"his/internal/mapper"
	"his/internal/model"
	patientModel "his/internal/model/patient"
	patientService "his/internal/service/patient"
	pages "his/pkg/page"
	"his/pkg/response"
	"his/pkg/util"
	"net/http"
	"time"

	"gorm.io/gorm"
)

func Handle(db *gorm.DB, serv patientService.PatientService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getAll(w, r, serv)
		case http.MethodPost:
			create(w, r, serv)
		}
	}
}

func create(w http.ResponseWriter, r *http.Request, serv patientService.PatientService) {
	requestBody, err := util.BodyDecoder[patientModel.Patient](r)
	if err != nil {
		response.ResponseMessage("failed decode body", err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
	defer cancel()

	result, message, err := serv.CreatePatientService(ctx, &requestBody)
	if err != nil {
		response.ResponseMessage(message, err.Error(), "ERROR", http.StatusBadRequest, w, r)
		return
	}

	m := mapper.MappingPatientSingleData(result)
	response.ResponseBody(m, message, "INFO", http.StatusCreated, w, r)
}

func getAll(w http.ResponseWriter, r *http.Request, serv patientService.PatientService) {
	param := r.URL.Query()
	keyword := param.Get("keyword")

	size := pages.ParamPagination("size", 15, r)
	page, offsite := pages.ParamOffset(size, r)

	ctx, cancel := context.WithTimeout(r.Context(), time.Second*5)
	defer cancel()

	result, total, message, err := serv.GetAllPatientService(ctx, offsite, size, keyword)
	if err != nil {
		response.ResponseMessage(message, err.Error(), "ERROR", 400, w, r)
		return
	}

	previousLink, nextLink := pages.PaginationLink(page, size, total, keyword)
	data := mapper.MappingPatientData(result)
	res := model.PaginationResponse{
		Result: data,
		Meta: model.PaginationMeta{
			TotalData: total,
			Page:      page,
			Size:      size,
			Previous:  previousLink,
			Next:      nextLink,
		},
	}

	response.ResponseBodyPaginated(res.Result, res.Meta, "success", "INFO", w, r)
}
