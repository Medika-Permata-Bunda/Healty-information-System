import { PatientRequest } from "@/types/patient/request";
import { Patient } from "@/types/patient/response";
import { ResponseData, ResponseDataPagination, ResponseMessage } from "@/types/response";

export function isFormEmpty(data: Patient) {
    const d = Object.keys(data)
    const warning: string[] = []

    d.forEach((item) => {
        if(data[item as keyof typeof data] == ""){
            warning.push((`${item} kosong`))
        }
    })

    if(warning.length != 0){
        alert(warning)

        return
    }

    alert("saving")
}

export async function Get(param: string | null) {
    const response = await fetch(`http://localhost:3000/api/patient?${param}`)
    const data = await response.json()

    return data as ResponseDataPagination<Patient[]>
}

export async function Delete(id: string | undefined): Promise<boolean> {
    const response = await fetch(`http://localhost:3000/api/patient?id=${id}`, {
        method: "DELETE"
    })
    const data: ResponseMessage = await response.json()
    
    alert(data.message)
    if(response.status != 200){
        return false
    }

    return true
}

export async function Post(patient: PatientRequest): Promise<ResponseData<Patient> | null> {
    const response = await fetch(`http://localhost:3000/api/patient`, {
        method: "POST",
        body: JSON.stringify(patient)
    })
    
    if(!response.ok){
        return null
    }

    const json: ResponseData<Patient> = await response.json()
    return json
}