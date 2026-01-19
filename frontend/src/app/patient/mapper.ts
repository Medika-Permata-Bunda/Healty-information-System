import { Patient } from "@/types/patient"

interface Body {
  no: number
  name: string
  medical_record: string
  address: string
}

export function tableMapper(res:Patient[]): Body[] {
    const patient: Body[] = []

    res.forEach((item, index) => {
        patient.push({
            no: index + 1,
            medical_record: item.medical_record,
            name: item.name,
            address: item.address.address
        })
    })

    return patient
}