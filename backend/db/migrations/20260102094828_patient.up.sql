-- =========================
-- ENUM TYPES
-- =========================

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'gender_type') THEN
        CREATE TYPE gender_type AS ENUM ('Laki-laki', 'Perempuan');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'blood_type') THEN
        CREATE TYPE blood_type AS ENUM ('A', 'B', 'AB', 'O');
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'education_type') THEN
        CREATE TYPE education_type AS ENUM (
            'Tidak sekolah',
            'SD',
            'SMP',
            'SMA',
            'D1',
            'D2',
            'D3',
            'D4',
            'S1',
            'S2',
            'S3'
        );
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'religion_type') THEN
        CREATE TYPE religion_type AS ENUM (
            'Islam',
            'Kristen',
            'Katolik',
            'Hindu',
            'Buddha',
            'Konghucu'
        );
    END IF;
END$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'wedding_type') THEN
        CREATE TYPE wedding_type AS ENUM (
            'Belum menikah',
            'Menikah',
            'Janda',
            'Duda'
        );
    END IF;
END$$;

-- =========================
-- PATIENT TABLE
-- =========================

CREATE TABLE IF NOT EXISTS patient (
    medical_record     VARCHAR(10) PRIMARY KEY,
    name               VARCHAR(80) NOT NULL,
    birth_place        VARCHAR(80) NOT NULL,
    birth_date         DATE,

    gender             gender_type DEFAULT 'Laki-laki',
    blood              blood_type DEFAULT 'A',
    education          education_type DEFAULT 'SMA',
    religion           religion_type DEFAULT 'Islam',
    wedding            wedding_type DEFAULT 'Menikah',

    nation             UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    language           UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    disability         UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,

    bpjs               VARCHAR(18) NOT NULL,
    email              VARCHAR(100),
    phone              VARCHAR(15),

    work               UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    instance           UUID NOT NULL REFERENCES category(id) ON DELETE CASCADE,

    address            TEXT,
    village            INT,
    district           INT,
    regency            INT,
    province           INT,

    parent_name        VARCHAR(80),
    parent_work        UUID REFERENCES category(id) ON DELETE CASCADE,
    parent_address     TEXT,
    parent_village     INT,
    parent_district    INT,
    parent_regency     INT,
    parent_province    INT,

    created_at         TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMP NOT NULL DEFAULT NOW()
);

-- =========================
-- UPDATED_AT TRIGGER
-- =========================

CREATE OR REPLACE FUNCTION update_patient_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS patient_updated_at_trigger ON patient;

CREATE TRIGGER patient_updated_at_trigger
BEFORE UPDATE ON patient
FOR EACH ROW
EXECUTE FUNCTION update_patient_updated_at();
