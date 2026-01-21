package database

import (
	categoryModel "his/internal/model/category"
	patientModel "his/internal/model/patient"

	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) error {
	return db.AutoMigrate(
		&categoryModel.RefCategory{},
		&categoryModel.Category{},
		&patientModel.Patient{},
	)
}
