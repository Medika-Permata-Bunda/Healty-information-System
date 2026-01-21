package patientModel

type PatientShow struct {
	MedicalRecord string  `json:"medical_record"`
	Name          string  `json:"name"`
	Birth         Birth   `json:"birth"`
	BloodType     string  `json:"blood_type"`
	Gender        string  `json:"gender"`
	Education     string  `json:"education"`
	Religion      string  `json:"religion"`
	Wedding       string  `json:"wedding"`
	NIK           string  `json:"nik"`
	BPJS          string  `json:"bpjs"`
	Email         string  `json:"email"`
	PhoneNumber   string  `json:"phone_number"`
	Parent        Parent  `json:"parent"`
	Address       Address `json:"address"`
}

type Birth struct {
	Date  string `json:"date"`
	Place string `json:"place"`
}

type Parent struct {
	Name     string `json:"name"`
	Relation string `json:"relation"`
}

type Address struct {
	FullAddress string `json:"full_address"`
	Village     Region `json:"village"`
	District    Region `json:"district"`
	Regencie    Region `json:"regencie"`
	Province    Region `json:"province"`
}

type Region struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
