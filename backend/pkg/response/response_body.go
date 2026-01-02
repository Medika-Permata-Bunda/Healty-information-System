package response

import (
	"encoding/json"
	logging "his/pkg/logging"
	"net/http"
)

func ResponseBody(response any, log string, ty string, code int, w http.ResponseWriter, r *http.Request) {
	// var status string

	// switch ty {
	// case "INFO":
	// 	status = "Success"
	// case "WARN":
	// 	status = "Failed"
	// case "ERROR":
	// 	status = "Error"
	// }

	res, _ := json.Marshal(response)
	logging.Log(log, ty, r)
	w.WriteHeader(code)
	w.Write(res)
}
