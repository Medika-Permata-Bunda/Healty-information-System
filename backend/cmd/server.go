package cmd

import (
	"fmt"
	"his/internal/config"
	"his/internal/database"
	patientHandle "his/internal/handler/patient"
	patientRepo "his/internal/repository/patient"
	patientService "his/internal/service/patient"
	"net/http"

	"time"
)

func Server(listen string) {
	db, err := config.InitDB()
	if err != nil {
		panic(err)
	}

	if err := database.Migrate(db); err != nil {
		panic(err)
	}

	// Init
	patientRepository := patientRepo.InitPatientRepostory(db)
	patientService := patientService.InitPatientService(patientRepository)
	// Init

	// Route
	http.HandleFunc("/patient", patientHandle.Handle(db, patientService))
	http.HandleFunc("/patient/", patientHandle.HandlePrefix(db, patientService))
	// Route

	fmt.Println("✅  Server start in : ", time.Now().Format("2006-01-02 15:04:05"))
	fmt.Println("✅  Database connected")
	fmt.Println("✅  Migrate Success")
	fmt.Println("-- Server listen in port ", listen, " --")
	http.ListenAndServe(listen, nil)
}
