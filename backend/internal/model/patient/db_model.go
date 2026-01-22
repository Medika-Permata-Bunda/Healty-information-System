package patientModel

import "time"

// Gender enum
type gender string

const (
	GenderFemale gender = "perempuan"
	GenderMale   gender = "laki - laki"
)

// Blood type enum
type blood string

const (
	BloodA  blood = "A"
	BloodB  blood = "B"
	BloodAB blood = "AB"
	BloodO  blood = "O"
)

// Education type enum
type education string

const (
	EduTK  education = "TK"
	EduSD  education = "SD"
	EduSMA education = "SMA"
	EduD1  education = "D1"
	EduD2  education = "D2"
	EduD3  education = "D3"
	EduD4  education = "D4"
	EduS1  education = "S1"
	EduS2  education = "S2"
	EduS3  education = "S3"
)

// Religion type enum
type religion string

const (
	ReligionIslam    religion = "islam"
	ReligionKristen  religion = "kristen"
	ReligionHindu    religion = "hindu"
	ReligionBudha    religion = "budha"
	ReligionKatolik  religion = "katolik"
	ReligionKonghucu religion = "konghucu"
)

// Wedding type enum
type wedding string

const (
	ReligionMenikah      wedding = "menikah"
	ReligionBelumMenikah wedding = "belum menikah"
	ReligionJanda        wedding = "janda"
	ReligionDudha        wedding = "dudha"
)

// Parent type enum
type parent string

const (
	ReligionAyah parent = "ayah"
	ReligionIbu  parent = "ibu"
)

type Patient struct {
	MedicalRecord  string    `json:"medical_record" gorm:"type:varchar(10);not null;primaryKey"`
	Name           string    `json:"name" gorm:"type:varchar(80);not null"`
	BirthPlace     string    `json:"birth_place" gorm:"type:varchar(80);not null"`
	BirthDate      string    `json:"birth_date" gorm:"type:timestamp;not null"`
	Gender         gender    `json:"gender" gorm:"type:varchar(20);not null;default:'laki - laki'"`
	BloodType      blood     `json:"blood_type" gorm:"type:varchar(20);not null;default:'A'"`
	Education      education `json:"education" gorm:"type:varchar(20);not null;default:'SMA'"`
	Religion       religion  `json:"religion" gorm:"type:varchar(20);not null;default:'islam'"`
	Wedding        wedding   `json:"wedding" gorm:"type:varchar(20);not null;default:'belum menikah'"`
	NIK            string    `json:"nik" gorm:"type:varchar(20);not null"`
	BPJS           string    `json:"bpjs" gorm:"type:varchar(20);not null"`
	Email          string    `json:"email" gorm:"type:varchar(80);not null"`
	PhoneNumber    string    `json:"phone_number" gorm:"type:varchar(16);not null"`
	ParentName     string    `json:"parent_name" gorm:"type:varchar(50);not null"`
	ParentRelation parent    `json:"parent_relation" gorm:"type:varchar(20);not null;default:'ibu'"`
	FullAddress    string    `json:"full_address" gorm:"type:text;not null"`
	Village        int       `json:"village" gorm:"type:int;not null"`
	District       int       `json:"district" gorm:"type:int;not null"`
	Regencie       int       `json:"regencie" gorm:"type:int;not null"`
	Province       int       `json:"province" gorm:"type:int;not null"`
	IsDeleted      bool      `json:"-" gorm:"type:bool;not null"`
	CreatedAt      time.Time `json:"-" gorm:"not null;default:now()"`
	UpdatedAt      time.Time `json:"-" gorm:"not null;default:now()"`
	DeletedAt      time.Time `json:"-" gorm:"not null;default:now()"`
}
