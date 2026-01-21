package mapper

import patientModel "his/internal/model/patient"

func MappingPatientData(request []patientModel.Patient) []patientModel.PatientShow {
	result := make([]patientModel.PatientShow, 0, len(request))

	for _, item := range request {
		result = append(result, patientModel.PatientShow{
			MedicalRecord: item.MedicalRecord,
			Name:          item.Name,
			Birth: patientModel.Birth{
				Date:  item.BirthDate,
				Place: item.BirthPlace,
			},
			BloodType:   string(item.BloodType),
			Gender:      string(item.Gender),
			Education:   string(item.Education),
			Religion:    string(item.Religion),
			Wedding:     string(item.Wedding),
			NIK:         item.NIK,
			BPJS:        item.BPJS,
			Email:       item.Email,
			PhoneNumber: item.PhoneNumber,
			Parent: patientModel.Parent{
				Name:     item.ParentName,
				Relation: string(item.ParentRelation),
			},
			Address: patientModel.Address{
				FullAddress: item.FullAddress,
				Village: patientModel.Region{
					ID:   item.Village,
					Name: "vill",
				},
				District: patientModel.Region{
					ID:   item.District,
					Name: "dis",
				},
				Regencie: patientModel.Region{
					ID:   item.Regencie,
					Name: "reg",
				},
				Province: patientModel.Region{
					ID:   item.Province,
					Name: "pro",
				},
			},
		})
	}

	return result
}

func MappingPatientSingleData(request patientModel.Patient) patientModel.PatientShow {
	return patientModel.PatientShow{
		MedicalRecord: request.MedicalRecord,
		Name:          request.Name,
		Birth: patientModel.Birth{
			Date:  request.BirthDate,
			Place: request.BirthPlace,
		},
		BloodType:   string(request.BloodType),
		Gender:      string(request.Gender),
		Education:   string(request.Education),
		Religion:    string(request.Religion),
		Wedding:     string(request.Wedding),
		NIK:         request.NIK,
		BPJS:        request.BPJS,
		Email:       request.Email,
		PhoneNumber: request.PhoneNumber,
		Parent: patientModel.Parent{
			Name:     request.ParentName,
			Relation: string(request.ParentRelation),
		},
		Address: patientModel.Address{
			FullAddress: request.FullAddress,
			Village: patientModel.Region{
				ID:   request.Village,
				Name: "vill",
			},
			District: patientModel.Region{
				ID:   request.District,
				Name: "dis",
			},
			Regencie: patientModel.Region{
				ID:   request.Regencie,
				Name: "reg",
			},
			Province: patientModel.Region{
				ID:   request.Province,
				Name: "pro",
			},
		},
	}
}
