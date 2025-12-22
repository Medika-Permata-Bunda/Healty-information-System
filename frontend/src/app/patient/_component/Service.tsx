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

interface Input {
  label: string,
  component: JSX.Element
}

export default function Service(): JSX.Element {
  
    const [patient, setPatient] = useState<Body>({no: "1", medical_record: "00000", name: "", address: "address", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>})
    
    const head: string[] = ["No", "Rekam medis", "Alamat", "Action"]
    const body: Body[] = [
      {no: "1", medical_record: "000001", name: "Agus", address: "jk. l", action: <div><button onClick={() => setPatient(body[0])}>Edit</button></div>},
      {no: "2", medical_record: "000002", name: "Andre", address: "jk. l", action: <div><button onClick={() => setPatient(body[1])}>Edit</button></div>},
      {no: "3", medical_record: "000003", name: "Ujang", address: "jk. l", action: <div><button onClick={() => setPatient(body[2])}>Edit</button></div>},
      {no: "4", medical_record: "000004", name: "Rido", address: "jk. l", action: <div><button onClick={() => setPatient(body[3])}>Edit</button></div>},
      {no: "5", medical_record: "000005", name: "Jaka", address: "jk. l", action: <div><button onClick={() => setPatient(body[4])}>Edit</button></div>},
      {no: "6", medical_record: "000006", name: "Samsul", address: "jk. l", action: <div><button onClick={() => setPatient(body[5])}>Edit</button></div>},
      {no: "7", medical_record: "000007", name: "Aceng", address: "jk. l", action: <div><button onClick={() => setPatient(body[6])}>Edit</button></div>},
    ]

    const input: Input[] = [
      {label: "Nomor Registrasi", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Nomor Rawat", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Nomor Rekam Medis", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Poli tujuan", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full"><option value="menikah">Menikah</option><option value="cerai">Cerai</option><option value="dudha">Dudha</option><option value="janda">Janda</option></select>},
      {label: "Dokter tujuan", component: <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
    ] 

    return (
      <>
        <div className="m-2 flex border border-(--line) rounded-xl">
          <div className="w-[30%] border-r border-(--line)"></div>
          <div className="grid grid-cols-3">
            {input.map((item, index) => (<Input key={index} label={item.label} component={item.component} />))}
          </div>
        </div>
        <div className="flex items-center justify-end m-2">
          <div className="search">
            <input type="text" placeholder="search..." />
            <button className="border border-(--line) px-2">Search</button>
          </div>
        </div>
        <div className="flex w-full">
          <Table <Body> head={head} body={body}/>
        </div>
      </>
    )
  }