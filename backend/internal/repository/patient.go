package repository

import (
	"database/sql"
	"his/internal/model"
)

type patientRepository struct {
	db *sql.DB
}

type PatientRepository interface {
	ShowPatient(page, size int, keyword string) ([]model.PatientResponse, int, error)
	ShowByIdPatient(mr string) (model.PatientResponse, error)
	CreatePatient(req model.PatientRequest) error
	UpdatePatient(data model.PatientRequest, id string) error
	DeletePatient(mr string) error
	// Add function in here
}

func NewPatientRepository(db *sql.DB) PatientRepository {
	return &patientRepository{db}
}

// Write code in here
func (q *patientRepository) ShowPatient(page, size int, keyword string) ([]model.PatientResponse, int, error) {
	var count int
	if err := q.db.QueryRow("SELECT COUNT(*) FROM patient WHERE name ILIKE $1", "%"+keyword+"%").Scan(&count); err != nil {
		return nil, 0, err
	}

	res, err := q.db.Query("SELECT medical_record,name,birth_place,birth_date,gender,blood,education,religion,wedding,nation,language,disability,bpjs,email,phone,work,instance,address,village,district,regency,province,parent_name,parent_work,parent_address,parent_village,parent_district,parent_regency,parent_province FROM patient WHERE name ILIKE $1 LIMIT $2 OFFSET $3", "%"+keyword+"%", size, page)
	if err != nil {
		return nil, 0, err
	}

	defer res.Close()

	var result []model.PatientResponse
	for res.Next() {
		var data model.PatientResponse

		if err := res.Scan(&data.MedicalRecord, &data.Name, &data.BirthPlace, &data.BirthDate, &data.Gender, &data.Blood, &data.Education, &data.Religion, &data.Wedding, &data.Nation, &data.Language, &data.Disability, &data.BPJS, &data.Email, &data.Phone, &data.Work, &data.Instance, &data.Address, &data.Village, &data.District, &data.Regency, &data.Province, &data.ParentName, &data.ParentWork, &data.ParentAddress, &data.ParentVillage, &data.ParentDistrict, &data.ParentRegency, &data.ParentProvince); err != nil {
			return nil, 0, err
		}

		result = append(result, data)
	}

	return result, count, nil
}

func (q *patientRepository) ShowByIdPatient(mr string) (model.PatientResponse, error) {
	var data model.PatientResponse
	if err := q.db.QueryRow("SELECT id name FROM patient WHERE id = $1", mr).Scan(&data.MedicalRecord, &data.Name); err != nil {
		return model.PatientResponse{}, err
	}

	return data, nil
}

func (q *patientRepository) CreatePatient(req model.PatientRequest) error {

	query := `INSERT INTO patient (medical_record,name,birth_place,birth_date,gender,blood,education,religion,wedding,nation,language,disability,bpjs,email,phone,work,instance,address,village,district,regency,province,parent_name,parent_work,parent_address,parent_village,parent_district,parent_regency,parent_province) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)`
	if _, err := q.db.Exec(query, req.MedicalRecord, req.Name, req.BirthPlace, req.BirthDate, req.Gender, req.Blood, req.Education, req.Religion, req.Wedding, req.Nation, req.Language, req.Disability, req.BPJS, req.Email, req.Phone, req.Work, req.Instance, req.Address, req.Village, req.District, req.Regency, req.Province, req.ParentName, req.ParentWork, req.ParentAddress, req.ParentVillage, req.ParentDistrict, req.ParentRegency, req.ParentProvince); err != nil {
		return err
	}

	return nil
}

func (q *patientRepository) UpdatePatient(data model.PatientRequest, id string) error {

	if _, err := q.db.Exec("UPDATE patient SET name = $1 WHERE id = $2", data.Name, id); err != nil {
		return err
	}

	return nil
}

func (q *patientRepository) DeletePatient(mr string) error {

	if _, err := q.db.Exec("DELETE FROM patient WHERE id = $1", mr); err != nil {
		return err
	}

	return nil
}
