import { Patient } from "@/types/patient/response"
import { ReactNode } from "react"

interface Body {
  no: number
  name: string
  medical_record: string
  address: string
  action?: ReactNode;
}

export function tableMapper(res:Patient[]): Body[] {
    const patient: Body[] = []

    res.forEach((item, index) => {
        patient.push({
            no: index + 1,
            medical_record: item.medical_record,
            name: item.name,
            address: item.address.full_address + ", " + item.address.village.name + ", " + item.address.regencie.name
        })
    })

    return patient
}