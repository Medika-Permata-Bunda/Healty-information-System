package response

import (
	"encoding/json"
	"his/internal/model"
	logging "his/pkg/logging"
	"net/http"
)

func ResponseMessage(message string, log string, ty string, code int, w http.ResponseWriter, r *http.Request) {
	var s string

	switch ty {
	case "INFO":
		s = "SUCCESS"
	case "WARN":
		s = "WARNING"
	case "ERROR":
		s = "ERROR"
	}

	res, _ := json.Marshal(model.ResponseMessage{Status: s, Message: message})
	logging.Log(log, ty, r)
	w.WriteHeader(code)
	w.Write(res)
}
