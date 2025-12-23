package model

import (
	"github.com/google/uuid"
)

type Patient struct {
	MedicalRecord string `db:"medical_record" json:"medical_record"`
	Name          string `db:"name" json:"name"`
	BirthPlace    string `db:"birth_place" json:"birth_place"`
	BirthDate     string `db:"birth_date" json:"birth_date"`

	Gender    string `db:"gender" json:"gender"`
	Blood     string `db:"blood" json:"blood"`
	Education string `db:"education" json:"education"`
	Religion  string `db:"religion" json:"religion"`
	Wedding   string `db:"wedding" json:"wedding"`

	Nation     uuid.UUID `db:"nation" json:"nation"`
	Language   uuid.UUID `db:"language" json:"language"`
	Disability uuid.UUID `db:"disability" json:"disability"`

	NIK   string `db:"nik" json:"nik"`
	BPJS  string `db:"bpjs" json:"bpjs"`
	Email string `db:"email" json:"email"`
	Phone string `db:"phone" json:"phone"`

	Work     uuid.UUID `db:"work" json:"work"`
	Instance uuid.UUID `db:"instance" json:"instance"`

	Address  string `db:"address" json:"address"`
	Village  int    `db:"village" json:"village"`
	District int    `db:"district" json:"district"`
	Regency  int    `db:"regency" json:"regency"`
	Province int    `db:"province" json:"province"`

	MotherName string `db:"mother_name" json:"mother_name"`
	ParentName string `db:"parent_name" json:"parent_name"`

	ParentWork     uuid.UUID `db:"parent_work" json:"parent_work"`
	ParentAddress  string    `db:"parent_address" json:"parent_address"`
	ParentVillage  int       `db:"parent_village" json:"parent_village"`
	ParentDistrict int       `db:"parent_district" json:"parent_district"`
	ParentRegency  int       `db:"parent_regency" json:"parent_regency"`
	ParentProvince int       `db:"parent_province" json:"parent_province"`
}

type PatientResult struct {
	MedicalRecord string      `json:"medical_record"`
	Name          string      `json:"name"`
	Birth         BirthResult `json:"birth"`

	Gender    string `json:"gender"`
	Blood     string `json:"blood"`
	Education string `json:"education"`
	Religion  string `json:"religion"`
	Wedding   string `json:"wedding"`

	Nation     Category `json:"nation"`
	Language   Category `json:"language"`
	Disability Category `json:"disability"`

	NIK   string `json:"nik"`
	BPJS  string `json:"bpjs"`
	Email string `json:"email"`
	Phone string `json:"phone"`

	Work     Category `json:"work"`
	Instance Category `json:"instance"`

	Address AddressResult `json:"address"`

	MotherName string `json:"mother_name"`
	ParentName string `json:"parent_name"`

	ParentWork    Category      `json:"parent_work"`
	ParentAddress AddressResult `json:"parent_address"`
}

type BirthResult struct {
	Place string `json:"place"`
	Date  string `json:"date"`
}

type AddressResult struct {
	Address  string `json:"address"`
	Village  int    `json:"village"`
	District int    `json:"district"`
	Regency  int    `json:"regency"`
	Province int    `json:"province"`
}

type Category struct {
	ID   uuid.UUID `json:"id"`
	Name string    `json:"name"`
}
