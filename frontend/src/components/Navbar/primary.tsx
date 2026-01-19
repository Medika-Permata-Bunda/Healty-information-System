'use client'
import { JSX } from "react";

export default function Navbar(): JSX.Element {
    return (
        <div className="w-full py-2 bg-(--secondary) border-b border-(--line) flex justify-end">
            <div className="flex items-center">
                <div>
                    <p className="text-[0.7rem]">Abdul</p>
                    <p className="text-(--font) text-[0.5rem]">Administrator</p>
                </div>
                <div className="w-8 h-8 bg-red-400 rounded-full mx-3"></div>
            </div>
        </div>
    )
}