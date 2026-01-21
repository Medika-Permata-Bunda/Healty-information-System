'use client'
import Navbar from "@/components/Navbar/primary";
import Navside from "@/components/Navside/primary";
import { JSX, useState } from "react";
import Service from "./_tabs/Service";
import Register from "./_tabs/Register";
import ModalRegister from "./_modal/Register";

export default function Home(): JSX.Element {

  const [openTab, setOpenTab] = useState<string>("register")
  const [modal, setModal] = useState<boolean>(false)
  
  function close() {
    setModal(false)
  }

  return (
    <div className="w-full h-screen flex">
      <Navside/>
      <div className="w-full">
        <Navbar/>
        <section className="h-[90vh] overflow-y-scroll">
        {/* content */}
          <section className="m-2 flex justify-between">
            <div className="flex items-center justify-end">
              <div className="search">
                <input type="text" placeholder="search..." />
                <button className="border border-(--line) px-2">Search</button>
              </div>
            </div>
            <div className="flex items-center">
              {openTab == "register" ? (<button className="w-8 h-8 bg-blue-600 rounded-full mx-2 text-2xl text-center" onClick={() => setModal(true)}>+</button>) : (<></>)}
              <div className="flex w-60 bg-(--background-transparent) justify-between p-1 rounded-md text-[0.8rem] text-center">
                <p className={`${openTab == "register" ? 'bg-background' : 'text-background'} text-white rounded-sm p-1 px-3 cursor-pointer w-[50%]`} onClick={() => setOpenTab("register")}>Baru</p>
                <p className={`${openTab == "service" ? 'bg-background' : 'text-background'} text-white rounded-sm p-1 px-3 cursor-pointer w-[50%]`} onClick={() => setOpenTab("service")}>Pelayanan</p>
              </div>
            </div>
          </section>
          { openTab == "service" ? <Service/> : <Register/> }
           {modal && (
              <ModalRegister onClose={() => close()}/>
            )}
        </section>
      </div>
    </div>
  );
}
