'use client'
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

export default function Navside(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)
    const Route :{route: string, label: string, icon: string, on_hover: boolean}[] = [
        {route: "/", label:"Home", icon:"bi bi-house-fill", on_hover: false},
        {route: "/patient", label:"Pasien", icon:"bi bi-people-fill", on_hover: false}
    ]

    return (
        <section className="flex">
            <div className="h-full bg-(--secondary) border-r border-(--line)" onMouseEnter={() => setOpen(true)}>
                {Route.map((item, index) => (
                    <div key={index} className="p-2 text-(--line)">
                        <i className={item.icon}></i>
                    </div>
                ))}
            </div>
            <div className={`${open ? 'w-40' : 'w-0 border-r-0'} h-full bg-(--secondary) border-r border-(--line) transition-all duration-150 ease-in-out overflow-hidden`} onMouseLeave={() => setOpen(false)}>
                {Route.map((item, index) => (
                    <Link key={index} href={item.route} className="hover:text-white text-(--line) transition-all ease-in-out duration-150 flex items-center p-2">
                        <p className="pl-1">{item.label}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}