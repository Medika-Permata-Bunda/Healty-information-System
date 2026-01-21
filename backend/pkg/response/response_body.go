package response

import (
	"encoding/json"
	"his/internal/model"
	logging "his/pkg/logging"
	"net/http"
)

func ResponseBody(response any, log string, ty string, w http.ResponseWriter, r *http.Request) {
	var s string

	switch ty {
	case "INFO":
		s = "SUCCESS"
	case "WARN":
		s = "WARNING"
	case "ERROR":
		s = "ERROR"
	}

	res, _ := json.Marshal(model.ResponseBody{Status: s, Result: response})
	logging.Log(log, ty, r)
	w.WriteHeader(200)
	w.Write(res)
}
