'use client'
import Table from "@/components/Table/primary"
import { JSX, ReactNode, useEffect, useState } from "react"
import { Delete, Get } from "../action"
import { tableMapper } from "../mapper"
import { Meta, Patient } from "@/types/patient/response"
import SideMenu from "../_modal/SideMenu"

interface Body {
  no: number
  name: string
  medical_record: string
  address: string
  action?: ReactNode;
}

export default function Register(): JSX.Element {

    const [recordParam, setRecordParam] = useState<string | null>(null)
    const [patient, setPatient] = useState<Patient[]>([])
    const [meta, setMeta] = useState<Meta>({total_data: 0, page: 0, size: 0, previous: null, next: null})
    const [open, setOpen] = useState<{is_click: boolean, req: Patient | undefined}>({is_click: false, req: undefined})
    const table = tableMapper(patient).map(row => ({
      ...row,
      action: (
        <>
          <div onClick={() => setOpen({is_click: true, req: patient.find(r => r.medical_record === row.medical_record)})}><i className="bi bi-eye-fill"></i></div>
        </>
      )
    }))

    function onModal() {
      setOpen({is_click:false, req: undefined})
    }
    
    function onDelete(id: string | undefined) {
      if(!id){
        alert("id kosong")
        return
      }
      setOpen({is_click:false, req: undefined})
      setPatient(prev => prev.filter(item => item.medical_record !== id))
      setMeta({...meta, total_data: meta.total_data -= 1})
    }
    
    async function pages(param: string | null) {
      if(!param){
        alert("empty parameter")
        return
      }
      const data = await Get(param)
      setPatient(data.result)
      setMeta(data.meta)
      setRecordParam(param)
    }
    
    useEffect(() => {
      async function loadData() {
        const data = await Get("page=0&size=8")
        setPatient(data.result)
        setMeta(data.meta)
      }
      
      loadData()
    }, [])

    return (
      <>
        <div className="flex w-full p-1">
          <div className="w-full">
            <Table <Body> head={["No", "Rekam medis", "Nama", "Alamat", "Action"]} body={table}/>
            <div className="w-full p-2 pr-0 flex justify-between">
              <p>Total data : {meta.total_data}</p>
              <div className="flex justify-end gap-2">
                <button onClick={() => pages(meta.previous)} className="w-10 h-10 border border-(--line) rounded-md flex justify-center items-center">
                  <i className={`${!meta.previous ? 'text-(--font)' : ''} bi bi-caret-left-fill text-md`}></i>
                </button>
                <div className="text-center px-5">
                  <p className="text-(--font)">Page</p>
                  <p>{meta.page}</p>
                </div>
                <button onClick={() => pages(meta.next)} className="w-10 h-10 border border-(--line) rounded-md flex justify-center items-center">
                  <i className={`${!meta.next ? 'text-(--font)' : ''} bi bi-caret-right-fill text-md`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          open.is_click && <SideMenu onModal={onModal} onDelete={() => onDelete(open.req?.medical_record)} req={open.req}/>
        }
      </>
    )
  }