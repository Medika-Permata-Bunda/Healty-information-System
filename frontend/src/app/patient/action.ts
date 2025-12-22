import { Patient } from "@/types/patient";

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