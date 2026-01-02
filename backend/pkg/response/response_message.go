package response

import (
	"encoding/json"
	"his/internal/model"
	logging "his/pkg/logging"
	"net/http"
)

func ResponseMessage(message string, log string, ty string, code int, w http.ResponseWriter, r *http.Request) {
	var status string

	switch ty {
	case "INFO":
		status = "Success"
	case "WARN":
		status = "Failed"
	case "ERROR":
		status = "Error"
	}

	res, _ := json.Marshal(model.ResponseMessage{Status: status, Message: message})
	logging.Log(message, ty, r)
	w.WriteHeader(code)
	w.Write(res)
}
