package util

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"
)

func Param(r *http.Request, path string) (string, int, error) {
	idStr := strings.TrimPrefix(r.URL.Path, path)
	idStr = strings.TrimSuffix(idStr, "/")

	if idStr == "" {
		return "empty id", 0, fmt.Errorf("empty ID")
	}

	id, err := strconv.Atoi(idStr)
	if err != nil {
		return "id must integer", 0, fmt.Errorf("id must integer")
	}

	return "success", id, nil
}

func ParamStr(r *http.Request, path string) (string, error) {
	idStr := strings.TrimPrefix(r.URL.Path, path)
	idStr = strings.Trim(idStr, "/")

	if strings.TrimSpace(idStr) == "" {
		return "", fmt.Errorf("empty ID")
	}

	return idStr, nil
}
