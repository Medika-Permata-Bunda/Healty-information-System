'use client'
import Navbar from "@/components/Navbar/primary";
import Navside from "@/components/Navside/primary";
import { JSX } from "react";

interface Body {
  no: string
  medical_record: string
  address: string
  action: JSX.Element
}

export default function Home() {

  return (
    <div className="w-full h-screen flex">
      <Navside/>
      <div className="w-full">
        <Navbar/>
        {/* content */}
        {/* content */}
      </div>
    </div>
  );
}
