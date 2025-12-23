DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'gender_type'
    ) THEN
        CREATE TYPE gender_type AS ENUM ('L', 'P');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'blood_type'
    ) THEN
        CREATE TYPE blood_type AS ENUM ('A', 'B', 'AB', 'O');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'religion_type'
    ) THEN
        CREATE TYPE religion_type AS ENUM ('islam', 'kristen', 'budha', 'hindu', 'katolik');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'education_type'
    ) THEN
        CREATE TYPE education_type AS ENUM ('TK', 'SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'D4', 'S1', 'S2', 'S3');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'wedding_type'
    ) THEN
        CREATE TYPE wedding_type AS ENUM ('menikah', 'belum menikah', 'janda', 'dudha');
    END IF;
END$$;
	
CREATE TABLE IF NOT EXISTS patient (
	medical_record VARCHAR(10) PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	birth_place VARCHAR(80) NOT NULL,
	birth_date DATE NOT NULL,
	gender gender_type DEFAULT 'L',
	blood blood_type DEFAULT 'A',
	education education_type DEFAULT 'SMA',
	religion religion_type DEFAULT 'islam',
	wedding wedding_type DEFAULT 'menikah',
	nation UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	language UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	disability UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	nik VARCHAR(18) NOT NULL,
	bpjs VARCHAR(18) NOT NULL,
	email VARCHAR(100) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	work UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	instance UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	address TEXT NOT NULL,
	village INT NOT NULL,
	district INT NOT NULL,
	regency INT NOT NULL,
	province INT NOT NULL,
	mother_name VARCHAR(80) NOT NULL,
	parent_name VARCHAR(80) NOT NULL,
	parent_work UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
	parent_address TEXT NOT NULL,
	parent_village INT NOT NULL,
	parent_district INT NOT NULL,
	parent_regency INT NOT NULL,
	parent_province INT NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP NOT NULL DEFAULT NOW()

	-- write up migration here
);

-- Trigger agar updated_at auto-update
CREATE OR REPLACE FUNCTION update_patient_updated_at()
RETURNS TRIGGER AS $$
BEGIN
	NEW.updated_at = NOW();
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER patient_updated_at_trigger
BEFORE UPDATE ON patient
FOR EACH ROW
EXECUTE FUNCTION update_patient_updated_at();
