package model

import (
	"github.com/google/uuid"
)

type Patient struct {
	MedicalRecord string `db:"medical_record" json:"medical_record"`
	Name          string `db:"name" json:"name"`
	BirthPlace    string `db:"birth_pace" json:"birth_place"`
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
	Regencie int    `db:"regencie" json:"regencie"`
	Province int    `db:"province" json:"province"`

	MotherName string `db:"mother_name" json:"mother_name"`
	ParentName string `db:"parent_name" json:"parent_name"`

	ParentWork     uuid.UUID `db:"parent_work" json:"parent_work"`
	ParentAddress  string    `db:"parent_address" json:"parent_address"`
	ParentVillage  int       `db:"parent_village" json:"parent_village"`
	ParentDistrict int       `db:"parent_district" json:"parent_district"`
	ParentRegencie int       `db:"parent_regencie" json:"parent_regencie"`
	ParentProvince int       `db:"parent_province" json:"parent_province"`
}
