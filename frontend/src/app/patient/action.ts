import { Patient } from "@/types/patient";
import { ResponseData, ResponseMessage } from "@/types/response";

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

export async function Get() {
    const response = await fetch("http://localhost:3000/api/patient")
    const data = await response.json()

    return data as ResponseData<Patient[]>
}

export async function Delete(id: string | undefined) {
    const response = await fetch(`http://localhost:3000/api/patient?id=${id}`, {
        method: "DELETE"
    })
    const data: ResponseMessage = await response.json()

    alert(data.message)
}

export async function Patch<T>(val: T) {
    const response = await fetch(`http://localhost:3000/api/patient?id=${val}`, {
        method: "PATCH",
        body: JSON.stringify({
            name: val
        })
    })
    const data: ResponseMessage = await response.json()

    alert(data.message)
}