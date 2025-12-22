package cmd

import (
	"fmt"
	"his/internal/config"
	"his/internal/handler"
	"net/http"
)

func Server(listen string) {
	db, err := config.Database()
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Route
	http.HandleFunc("/patient", handler.PatientController(db))

	fmt.Println("[  Database connected ]")
	fmt.Println("[  Server listen in ", listen, " ]")
	http.ListenAndServe(listen, nil)
}
