import {Patient} from "@/types/patient/response";
import { ResponseData, ResponseDataPagination, ResponseMessage } from "@/types/response";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const page: string | null = req.nextUrl.searchParams.get("page")
    const size: string | null = req.nextUrl.searchParams.get("size")

    try {
        const response = await fetch(`http://localhost:8080/patient?page=${page}&size=${size}`)
        
        if(!response.ok){
            return NextResponse.json(
                { message: "failed get data" },
                { status: 400 }
            )
        }

        const json: ResponseDataPagination<Patient[]> = await response.json()
        return NextResponse.json(json)
    }catch(e){
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}

export async function DELETE(req: NextRequest) {
    const mr: string | null = req.nextUrl.searchParams.get("id")

    if(!mr){
        return NextResponse.json(
            { message: "need parameter id" },
            { status: 400 }
        )
    }

    try {
        const response = await fetch(`http://localhost:8080/patient/${mr}`, {
            method: "DELETE"
        })
        const json: ResponseMessage = await response.json()
        const status: number = response.status
        const message: string = json.message

        if(!response.ok){
            return NextResponse.json(
                { message },
                { status }
            )
        }

        return NextResponse.json(
            { message },
            { status }
        )
    }catch(e){
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }

}

export async function POST(req: NextRequest) {
    const body = await req.json()

    try {
        const response = await fetch(`http://localhost:8080/patient`, {
            method: "POST",
            body: JSON.stringify(body)
        })

        const status: number = response.status
        if(!response.ok){
            const json: ResponseMessage = await response.json()
            return NextResponse.json(
                { message: json.message },
                { status }
            )
        }
        
        const json: ResponseData<Patient> = await response.json()
        return NextResponse.json(json)
    }catch(e){
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}