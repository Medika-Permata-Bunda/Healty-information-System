
	-- YANG SALAH (akan error jika tabel tidak ada):
	-- DROP TABLE ref_category;

	-- YANG BENAR (aman meski tabel sudah tidak ada):
	DROP TABLE IF EXISTS ref_category;

	-- Atau jika ada foreign key constraints:
	-- DROP TABLE IF EXISTS ref_category CASCADE;
	