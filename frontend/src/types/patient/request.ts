export interface PatientRequest {
  medical_record: string
  name: string
  birth_place: string
  birth_date: string // format ISO: YYYY-MM-DD
  gender: "laki-laki" | "perempuan"
  blood_type: "A" | "B" | "AB" | "O"
  education: "SD" | "SMP" | "SMA" | "D1" | "D2" | "D3" | "D4" | "S1" | "S2" | "S3"
  religion: "islam" |"kristen" | "katolik" | "hindu" | "budha" | "koghucu"
  wedding: "menikah" | "belum menikah" | "janda" | "dudha"
  nik: string
  bpjs: string
  email: string
  phone_number: string
  parent_name: string
  parent_relation: "ayah" | "ibu"
  full_address: string
  village: number
  district: number
  regencie: number
  province: number
}
