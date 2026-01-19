'use client'
import Input from "@/components/Input/Primary"
import Table from "@/components/Table/primary"
import { PatientMap } from "@/types/patient"
import { JSX } from "react"

interface Input {
  label: string,
  component: JSX.Element
}

export default function Service(): JSX.Element {
  
    const tableContent: PatientMap[] = [
      {
        medical_record: "001221",
        name: "agus",
        birth: "123123"
      }
    ]

    const input: Input[] = [
      {label: "Nomor Registrasi", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Nomor Rawat", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Nomor Rekam Medis", component: <input type="number" className="border border-(--line) px-2 py-1 rounded-md w-full"/>},
      {label: "Poli tujuan", component: <select className="border border-(--line) px-2 py-1 rounded-md w-full"><option value="menikah">Bedah</option><option value="cerai">Jiwa</option><option value="dudha">Penyakit dalam</option><option value="janda">THT</option></select>},
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
        <div className="pl-2 w-full">
          <Table <PatientMap> head={["Rekam medis", "Nama", "Tempat & tgl lahir"]} body={tableContent}/>
        </div>
      </>
    )
  }