'use client'
import Table from "@/components/Table/primary"
import { JSX, ReactNode, useEffect, useState } from "react"
import { Delete, Get } from "../action"
import { tableMapper } from "../mapper"
import { Patient } from "@/types/patient"
import SideMenu from "../_modal/SideMenu"

interface Body {
  no: number
  name: string
  medical_record: string
  address: string
  action?: ReactNode;
}

export default function Register(): JSX.Element {

    const [patient, setPatient] = useState<Patient[]>([])
    const [open, setOpen] = useState<{is_click: boolean, req: Patient | undefined}>({is_click: false, req: undefined})
    const table = tableMapper(patient).map(row => ({
      ...row,
      action: (
        <>
          <div onClick={() => setOpen({is_click: true, req: patient.find(r => r.medical_record === row.medical_record)})}><i className="bi bi-eye-fill"></i></div>
        </>
      )
    }))

    function onClose() {
      setOpen({is_click:false, req: undefined})
    }
    
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
            <Table <Body> head={["No", "Rekam medis", "Nama", "Alamat", "Action"]} body={table}/>
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
        {
          open.is_click && <SideMenu props={{open: onClose, req: open.req}}/>
        }
      </>
    )
  }