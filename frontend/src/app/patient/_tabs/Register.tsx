'use client'
import Input from "@/components/Input/Primary"
import Table from "@/components/Table/primary"
import { JSX, useState } from "react"

interface Body {
  no: string
  name: string
  medical_record: string
  address: string
  action: JSX.Element
}

export default function Register(): JSX.Element {
  
    interface Input {
      label: string
      component: JSX.Element
    }

    const [patient, setPatient] = useState<Body>({no: "1", medical_record: "00000", name: "dummy", address: "address", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>})
    
    const head: string[] = ["No", "Rekam medis", "Nama", "Alamat", "Action"]
    const body: Body[] = [
      {no: "1", medical_record: "000001", name: "Agus", address: "jk. l", action: <div><button onClick={() => setPatient(body[0])}>Edit</button></div>},
      {no: "2", medical_record: "000002", name: "Andre", address: "jk. l", action: <div><button onClick={() => setPatient(body[1])}>Edit</button></div>},
      {no: "3", medical_record: "000003", name: "Ujang", address: "jk. l", action: <div><button onClick={() => setPatient(body[2])}>Edit</button></div>},
      {no: "4", medical_record: "000004", name: "Rido", address: "jk. l", action: <div><button onClick={() => setPatient(body[3])}>Edit</button></div>},
      {no: "5", medical_record: "000005", name: "Jaka", address: "jk. l", action: <div><button onClick={() => setPatient(body[4])}>Edit</button></div>},
      {no: "6", medical_record: "000006", name: "Samsul", address: "jk. l", action: <div><button onClick={() => setPatient(body[5])}>Edit</button></div>},
      {no: "7", medical_record: "000007", name: "Aceng", address: "jk. l", action: <div><button onClick={() => setPatient(body[6])}>Edit</button></div>},
    ]

    const inp: Input[] = [
      {label: "Username", component: <><input className="border border-(--line) p-1 ml-2 m-1 rounded-md" type="text" value={patient.name} /><button className="rounded-md m-1 p-1 px-2 border border-(--line)">m</button></>}
    ]

    return (
      <>
        <h1 className="m-2 mb-0">Registrasi pasien</h1>
        <div className="flex w-full">
          <Table <Body> head={head} body={body}/>
          <div className="w-[30vw] h-[30vw] rounded-md m-2 border border-(--line) relative overflow-y-scroll">
            <div className="p-2 flex items-center">
            <div className="w-10 h-10 rounded-full border border-(--line)"></div>
              <div>
                <p className="ml-2 font-bold">{patient.name}</p>
                <p className="ml-2 text-xs text-(--font)">{patient.medical_record}</p>
              </div>
            </div>
            {inp.map((item, index) => (
              <div key={index}>
                {item.component}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }