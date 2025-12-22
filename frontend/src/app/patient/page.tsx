'use client'
import Navbar from "@/components/Navbar/primary";
import Navside from "@/components/Navside/primary";
import { JSX, useState } from "react";
import Service from "./_component/Service";
import Register from "./_component/Register";

export default function Home(): JSX.Element {

  const [openTab, setOpenTab] = useState<string>("register")

  return (
    <div className="w-full h-screen flex">
      <Navside/>
      <div className="w-full">
        <Navbar/>
        <section className="h-[90vh] overflow-y-scroll">
        {/* content */}
          <section className="m-2 mt-5 mb-5">
            <div className="flex">
              <p className={`${openTab == "register" ? 'border-b border-white bg-linear-to-b from-0% to-(--transparent)' : 'text-(--line)'} p-1 px-3 cursor-pointer rounded-xl`} onClick={() => setOpenTab("register")}>Daftar baru</p>
              <p className={`${openTab == "service" ? 'border-b border-white bg-linear-to-b from-0% to-(--transparent)' : 'text-(--line)'} p-1 px-3 cursor-pointer rounded-xl`} onClick={() => setOpenTab("service")}>Daftar pelayanan</p>
            </div>
          </section>
          { openTab == "service" ? <Service/> : <Register/> }
        </section>
      </div>
    </div>
  );
}
