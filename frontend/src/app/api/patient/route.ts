import {Patient} from "@/types/patient";
import { ResponseData } from "@/types/response";
import { NextResponse } from "next/server";

export async function GET() {
    const response:ResponseData<Patient[]> = {
        result: [
            {
                medical_record: "MR-001",
                name: "Ahmad Fauzi",
                birth: {
                    place: "Jakarta",
                    date: "1998-05-20",
                },
                blood: "O",
                gender: "Laki-laki",
                education: "S1",
                religion: "Islam",
                wedding: "Menikah",
                nation: "Indonesia",
                language: "Indonesia",
                disability: "Tidak ada",
                mother_name: "Siti Aminah",
                address: {
                    address: "Jl. Merdeka No. 10",
                    village: "Sukamaju",
                    district: "Cimanggis",
                    regencie: "Depok",
                    province: "Jawa Barat",
                },
                parent: {
                    name: "Siti Aminah",
                    work: "Ibu Rumah Tangga",
                    address: {
                        address: "Jl. Merdeka No. 10",
                        village: "Sukamaju",
                        district: "Cimanggis",
                        regencie: "Depok",
                        province: "Jawa Barat",
                    },
                },
                nik: "3175092005980001",
                bpjs: "0001234567890",
                email: "ahmad.fauzi@email.com",
                phone: "081234567890",
                work: "Karyawan Swasta",
                instance: "PT Sehat Selalu",
            }
        ],
        meta: {
            total_data: 1,
            page:0,
            size:5,
            previous: null,
            next: null
        }
    }

    return NextResponse.json(response)
}