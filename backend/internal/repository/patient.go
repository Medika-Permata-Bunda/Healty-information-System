package repository

import (
	"database/sql"
	"his/internal/model"
)

type patientRepository struct {
	db *sql.DB
}

type PatientRepository interface {
	AddPatient(data model.Patient) error
	// Add function in here
}

func NewPatientRepository(db *sql.DB) PatientRepository {
	return &patientRepository{db}
}

// Write code in here
func (q *patientRepository) AddPatient(data model.Patient) error {

	query := `
		INSERT INTO patient (
			medical_record, name, birth_pace, birth_date, gender, blood, education, religion, wedding, nation, language, disability, nik, bpjs, email, phone, work, instance, address, village, district, regencie, province, mother_name, parent_name, parent_work, parent_address, parent_village, parent_district, parent_regencie, parent_province
		) VALUES (
			$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31
		)`

	if _, err := q.db.Exec(
		query,
		data.MedicalRecord,
		data.Name,
		data.BirthPlace,
		data.BirthDate,
		data.Gender,
		data.Blood,
		data.Education,
		data.Religion,
		data.Wedding,
		data.Nation,
		data.Language,
		data.Disability,
		data.NIK,
		data.BPJS,
		data.Email,
		data.Phone,
		data.Work,
		data.Instance,
		data.Address,
		data.Village,
		data.District,
		data.Regencie,
		data.Province,
		data.MotherName,
		data.ParentName,
		data.ParentWork,
		data.ParentAddress,
		data.ParentVillage,
		data.ParentDistrict,
		data.ParentRegencie,
		data.ParentProvince,
	); err != nil {
		return err
	}

	return nil
}
