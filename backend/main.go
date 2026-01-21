package main

import (
	"fmt"
	"his/cmd"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// @title           KAVI Kasir API
	// @version         1.0
	// @description     dokumentasi API Kavi Kasir
	// @host            localhost:8080
	// @BasePath        /

	_ = godotenv.Load()

	if len(os.Args) < 2 {
		Help()
		return
	}

	cli := os.Args[1]
	// args := os.Args[2:]

	prod := os.Getenv("APP_LISTEN")
	dev := os.Getenv("APP_LISTEN_DEV")

	switch cli {
	case "server":
		cmd.Server(prod)

	case "dev":
		cmd.Server(dev)

	default:
		fmt.Print("Command not found")
	}
}

func Help() {
	fmt.Print(`
Available commands:

	Application:
		go run . server							run server

	Database migration:
		go run . migrate						run migration
		go run . rollback						down migration
		go run . seed							run seed SQL
		go run . fresh							rollback -> migrate -> seed
		go run . make:migration <table_name>				create timestamped up/down migration pair
		go run . make:seed <table_name>					create seed SQL template
		
	Create template:
		go run . make:template <create_folder> <file_name> <type>	create template, <type> = [-h = create handler, -ro = create route, -r = create repository, -s = create service, -a = create all]

	Scheduler:
		go run . scheduler						scheduler job, edit cmd/scheduler.go
	`)
}
