
	-- YANG SALAH (akan error jika tabel tidak ada):
	-- DROP TABLE category;

	-- YANG BENAR (aman meski tabel sudah tidak ada):
	DROP TABLE IF EXISTS category;

	-- Atau jika ada foreign key constraints:
	-- DROP TABLE IF EXISTS category CASCADE;
	