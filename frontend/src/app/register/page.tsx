'use client'
import Navbar from "@/components/Navbar/primary";
import Navside from "@/components/Navside/primary";
import Table from "@/components/Table/primary";
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
    {no: "1", medical_record: "000001", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "2", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "3", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "4", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "5", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "6", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
    {no: "7", medical_record: "000002", address: "jk. l", action: <div><button onClick={() => alert("oke")}>Edit</button><button onClick={() => alert("oke")}>Delete</button></div>},
  ]

  return (
    <div className="w-full h-screen flex">
      <Navside/>
      <div className="w-full">
        <Navbar/>
        <section className="h-[90vh] overflow-y-scroll">
        {/* content */}
          <Table <Body> title="Data pasien" description="menampilkan semua data pasien" head={head} body={body}>
            <div className="flex items-center">
              <button className="w-8 h-8 bg-blue-600 rounded-full mx-2 text-2xl text-center">+</button>
              <div className="search">
                <input type="text" placeholder="search..." />
                <button className="border border-(--line) px-2">Search</button>
              </div>
            </div>
          </Table>
        {/* content */}
        </section>
      </div>
    </div>
  );
}
