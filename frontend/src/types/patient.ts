export interface Address {
    address: string
    village: string
    district: string
    regencie: string
    province:  string
}

export interface Birth {
    place: string
    date: string
}

export interface Parent {
    name: string
    work: string
    address: Address
}

export interface Patient {
    medical_record: string
    name: string
    birth: Birth
    blood: string
    gender: string
    education: string
    religion: string
    wedding: string
    nation: string
    language: string
    disability: string
    mother_name:  string
    address: Address
    parent: Parent
    nik: string
    bpjs: string
    email: string
    phone: string
    work: string
    instance: string
}