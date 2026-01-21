package categoryModel

import (
	"time"

	"github.com/google/uuid"
)

type RefCategory struct {
	ID        uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid();primaryKey"`
	Nama      string    `json:"name" gorm:"type:varchar(100);not null"`
	CreatedAt time.Time `json:"-" gorm:"not null;default:now()"`
	UpdatedAt time.Time `json:"-" gorm:"not null;default:now()"`
}

type Category struct {
	ID            uuid.UUID   `json:"id" gorm:"type:uuid;default:gen_random_uuid();primaryKey"`
	Nama          string      `json:"name" gorm:"type:varchar(255);not null"`
	Deskripsi     string      `json:"description" gorm:"type:text;not null"`
	RefKategoriID uuid.UUID   `json:"-" gorm:"type:uuid;not null"`
	RefKategori   RefCategory `json:"ref_category" gorm:"foreignKey:RefKategoriID;constraint:OnDelete:CASCADE;"`
	CreatedAt     time.Time   `json:"-" gorm:"not null;default:now()"`
	UpdatedAt     time.Time   `json:"-" gorm:"not null;default:now()"`
}
