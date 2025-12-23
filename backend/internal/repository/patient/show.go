package patient

import "his/internal/model"

func (q *patientRepository) PaginationPatient(page, size int, keyword string) ([]model.PatientResult, int, error) {

	var count int
	if err := q.db.QueryRow("SELECT COUNT(*) FROM patient WHERE name ILIKE $1", "%"+keyword+"%").Scan(&count); err != nil {
		return nil, 0, err
	}

	res, err := q.db.Query("SELECT patient.medical_record, patient.name, patient.birth_place, patient.birth_date, patient.gender, patient.blood, patient.religion, patient.education, patient.wedding, patient.nation AS nation_id, n.name AS nation, patient.language AS language_id, l.name AS language, patient.disability AS disability_id, d.name AS disability, patient.nik, patient.bpjs, patient.email, patient.phone, patient.work AS work_id, w.name AS work, patient.instance AS instance_id, i.name AS instance, patient.address, patient.village, patient.district, patient.regency, patient.province, patient.mother_name, patient.parent_name, patient.parent_work AS parent_work_id, pw.name AS parent_work, patient.parent_address, patient.parent_village, patient.parent_district, patient.parent_regency, patient.parent_province FROM patient INNER JOIN category n ON patient.nation = n.id INNER JOIN category l ON patient.language = l.id INNER JOIN category d ON patient.disability = d.id INNER JOIN category w ON patient.work = w.id INNER JOIN category i ON patient.instance = i.id INNER JOIN category pw ON patient.parent_work = pw.id WHERE patient.name ILIKE $1 LIMIT $2 OFFSET $3", "%"+keyword+"%", size, page)
	if err != nil {
		return nil, 0, err
	}

	var result []model.PatientResult
	for res.Next() {
		var data model.PatientResult

		if err := res.Scan(&data.MedicalRecord, &data.Name, &data.Birth.Place, &data.Birth.Date, &data.Gender, &data.Blood, &data.Education, &data.Religion, &data.Wedding, &data.Nation.ID, &data.Nation.Name, &data.Language.ID, &data.Language.Name, &data.Disability.ID, &data.Disability.Name, &data.NIK, &data.BPJS, &data.Email, &data.Phone, &data.Work.ID, &data.Work.Name, &data.Instance.ID, &data.Instance.Name, &data.Address.Address, &data.Address.Village, &data.Address.District, &data.Address.Regency, &data.Address.Province, &data.MotherName, &data.ParentName, &data.ParentWork.ID, &data.ParentWork.Name, &data.ParentAddress.Address, &data.ParentAddress.Village, &data.ParentAddress.District, &data.ParentAddress.Regency, &data.ParentAddress.Province); err != nil {
			return nil, 0, err
		}

		result = append(result, data)
	}

	return result, count, nil
}
