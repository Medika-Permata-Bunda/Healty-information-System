package cmd

import (
	"fmt"
	"his/config"
	"his/internal/database"
	patientHandle "his/internal/handler/patient"
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

	// Route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("listen"))
	})

	http.HandleFunc("/patient", patientHandle.Handle(db))
	http.HandleFunc("/patient/", patientHandle.HandlePrefix(db))
	// Route

	fmt.Println("✅  Server start in : ", time.Now().Format("2006-01-02 15:04:05"))
	fmt.Println("✅  Database connected")
	fmt.Println("✅  Migrate Success")
	fmt.Println("-- Server listen in port ", listen, " --")
	http.ListenAndServe(listen, nil)
}
