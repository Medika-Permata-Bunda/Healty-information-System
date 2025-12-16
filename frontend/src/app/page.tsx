'use client'
import Navbar from "@/components/Navbar/primary";
import Navside from "@/components/Navside/primary";
import Table from "@/components/Table/primary";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Body {
  no: string
  medical_record: string
  address: string
  action: JSX.Element
}

export default function Home() {

  const head: string[] = ["No", "Rekam medis", "Alamat", "Action"]
  const body: Body[] = [
    {no: "1", medical_record: "000001", address: "jk. l", action: <button onClick={() => alert("oke")}>Klik</button>},
    {no: "2", medical_record: "000002", address: "jk. l", action: <button onClick={() => alert("oke2")}>Klik</button>},
    {no: "3", medical_record: "000002", address: "jk. l", action: <button onClick={() => alert("oke2")}>Klik</button>},
    {no: "4", medical_record: "000002", address: "jk. l", action: <button onClick={() => alert("oke2")}>Klik</button>},
    {no: "5", medical_record: "000002", address: "jk. l", action: <button onClick={() => alert("oke2")}>Klik</button>},
  ]

  const pt = usePathname()

  return (
    <div className="w-full h-screen flex">
      <Navside/>
      <div className="w-full">
        <Navbar/>
        <p className="m-2">{pt}</p>
        {/* content */}
        {/* content */}
      </div>
    </div>
  );
}
