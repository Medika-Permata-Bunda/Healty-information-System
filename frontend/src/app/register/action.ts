import { Patient } from "@/types/patient";

export function AddPatient(data: Patient) {
    const d = Object.keys(data)

    d.forEach((item) => {
        if(data[item as keyof typeof data] == ""){
            console.log(`${item} kosong`)
        }

        return
    })
}