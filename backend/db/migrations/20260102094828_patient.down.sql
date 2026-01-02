
-- YANG SALAH (akan error jika tabel tidak ada):
-- DROP TABLE patient;

-- YANG BENAR (aman meski tabel sudah tidak ada):
-- Drop trigger
DROP TRIGGER IF EXISTS update_patient_updated_at ON patient;

-- Drop table
DROP TABLE IF EXISTS patient;

-- Drop enum types
DROP TYPE IF EXISTS gender_type;
DROP TYPE IF EXISTS blood_type;
DROP TYPE IF EXISTS education_type;
DROP TYPE IF EXISTS religion_type;
DROP TYPE IF EXISTS wedding_type;


-- Atau jika ada foreign key constraints:
-- DROP TABLE IF EXISTS patient CASCADE;
