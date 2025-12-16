'use client'
import Link from "next/link";
import { JSX, useState } from "react";

export default function Navside(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className="flex">
            <div className="w-10 h-full bg-(--secondary) border-r border-(--line)" onMouseEnter={() => setOpen(true)}></div>
            <div className={`${open ? 'w-40' : 'w-0 border-r-0'} h-full bg-(--secondary) border-r border-(--line) transition-all duration-150 ease-in-out overflow-hidden`} onMouseLeave={() => setOpen(false)}>
                <Link href="/register" className="hover:text-white text-(--line) transition-all ease-in-out duration-150">
                    <p className="p-2 w-full">Register</p>
                </Link>
            </div>
        </section>
    )
}