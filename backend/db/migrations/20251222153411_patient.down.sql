
	-- YANG SALAH (akan error jika tabel tidak ada):
	-- DROP TABLE patient;

	-- YANG BENAR (aman meski tabel sudah tidak ada):
	DROP TABLE IF EXISTS patient;
	DROP TYPE gender_type;
	DROP TYPE blood_type;
	DROP TYPE religion_type;
	DROP TYPE education_type;
	DROP TYPE wedding_type;

	-- Atau jika ada foreign key constraints:
	-- DROP TABLE IF EXISTS patient CASCADE;
	