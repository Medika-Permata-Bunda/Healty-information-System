interface API {
    LABEL: string
    PATH: string
}

const root = process.env.API_SERVER
export const API: API[] = [
    {LABEL: "PATIENT", PATH: `http://localhost:8080/patient`}
]

export function PATH(key: string): string {
    const path = API.find(d => d.LABEL == key)?.PATH
    return path ?? ""
}