'use client'
import Modal from "@/components/Modal/primary";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Patient } from "@/types/patient";
import { ChangeEvent, JSX, useRef, useState } from "react";
import { Delete, Patch } from "../action";

function Input({data}: {data: {data: string | undefined, label: string}}): JSX.Element {

    const [edit, setEdit] = useState<boolean>(false)
    const [value, setValue] = useState<string>(data.data ?? "")

    async function update() {
        await Patch<string>(value)
        setEdit(false)
    }

    return (
        <div className="m-3 p-3 border border-(--line) rounded-xl">
            <div className="flex justify-between">
                <label className="text-(--font) font-bold">{data.label}</label>
                <i className="bi bi-pencil-fill cursor-pointer" onClick={() => edit ? setEdit(false) : setEdit(true)}></i>
            </div>
            <div className="flex justify-between items-center">
                {edit ? (<><input value={value} onChange={(e) => setValue(e.target.value)} className={`border bg-(--greenbg) rounded-md border-(--greenline) p-1`} /><p onClick={() => update()} className="cursor-pointer">Edit mode</p></>) : (<input value={data.data} className={`border rounded-md border-(--gls) p-1`} readOnly />)}
            </div>
        </div>
    )
}

export default function SideMenu({props}: {props: {open: () => void, req: Partial<Patient> | undefined}}): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => props.open());

    async function del(id: string | undefined) {
        await Delete(id)
        props.open()
    }

    return (
        <Modal>
            <section ref={ref} className="w-[25%] h-[96%] absolute right-3 bg-background rounded-2xl border border-(--line) overflow-hidden">
                <div className="m-2 flex justify-between items-center border-b border-(--line) pb-2">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-500"></div>
                        <div className="ml-2">
                            <p className="font-bold">{props.req?.name}</p>
                            <p className="text-xs text-(--font)">{props.req?.medical_record}</p>
                        </div>
                    </div>
                    <i className="bi bi-trash-fill m-2 text-red-500 bg-(--redbg) py-2 px-3 rounded-md border border-(--redline) cursor-pointer" onClick={() => del(props.req?.medical_record)}></i>
                </div>
                <div className="mt-2 h-full overflow-scroll">
                    <Input data={{data: props.req?.nik, label: "NIK"}} />
                    <Input data={{data: props.req?.bpjs, label: "BPJS"}} />
                </div>
            </section>
        </Modal>
    )
}