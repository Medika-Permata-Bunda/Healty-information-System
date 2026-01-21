import { JSX, ReactNode } from "react";

interface Input {
    label: string
    children: React.ReactNode
}

export default function Input({label, children}: Input): JSX.Element {
    return (
        <div className="m-2 text-(--font) p-2 border border-(--line) rounded-xl">
            <div>
                <label>{label}</label>
            </div>
            {children}
        </div>
    )
}