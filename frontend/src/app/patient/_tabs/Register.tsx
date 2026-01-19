'use client'
import Table from "@/components/Table/primary"
import { JSX, useEffect, useState } from "react"
import { Get } from "../action"
import { tableMapper } from "../mapper"
import { Patient } from "@/types/patient"

interface Body {
  no: number
  name: string
  medical_record: string
  address: string
}

export default function Register(): JSX.Element {

    const [patient, setPatient] = useState<Patient[]>([])
    const body = tableMapper(patient)
    
    useEffect(() => {
      async function loadData() {
        const data = await Get()
        setPatient(data.result)
      }
      
      loadData()
    }, [])
    
    return (
      <>
        <div className="flex w-full p-1">
          <div className="w-full">
            <Table <Body> head={["No", "Rekam medis", "Nama", "Alamat"]} body={body}/>
            <div className="w-full p-2 pr-0 flex justify-end gap-2">
              <div className="w-10 h-10 border border-(--line) rounded-md flex justify-center items-center">
                <i className="bi bi-caret-left-fill text-md"></i>
              </div>
              <div className="w-10 h-10 border border-(--line) rounded-md flex justify-center items-center">
                <i className="bi bi-caret-right-fill text-md"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }