import { JSX } from "react";

interface Input {
    index: number
    label: string
    component: JSX.Element
}

export default function Input({index, label, component}: Input): JSX.Element {
    return (
        <div key={index} className="m-2 text-(--font)">
            <label>{label}</label>
            {component}
        </div>
    )
}