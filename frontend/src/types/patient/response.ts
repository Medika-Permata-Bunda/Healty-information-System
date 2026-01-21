export interface Patient {
  medical_record: string
  name: string
  birth: Birth
  blood_type: string
  gender: string
  education: string
  religion: string
  wedding: string
  nik: string
  bpjs: string
  email: string
  phone_number: string
  parent: Parent
  address: Address
}

export interface Birth {
  date: string
  place: string
}

export interface Parent {
  name: string
  relation: string
}

export interface Address {
  full_address: string
  village: Region
  district: Region
  regencie: Region
  province: Region
}

export interface Region {
  id: number
  name: string
}

export interface Meta {
    total_data: number
    page: number
    size: number
    previous: string | null
    next: string | null
}

export interface PatientResponse {
    result: Patient[]
    meta: Meta
}

export interface PatientMap {
    medical_record: string
    name: string
    birth: string
}