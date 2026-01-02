package error

import "errors"

var (
	ErrorDuplicateEntry = errors.New("duplicate entry")
	ErrorNotFound       = errors.New("not found")
)
