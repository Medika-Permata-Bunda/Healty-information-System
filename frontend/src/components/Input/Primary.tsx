import { JSX } from "react";

interface Input {
    label: string
    component: JSX.Element
}

export default function Input({label, component}: Input): JSX.Element {
    return (
        <div className="m-2 text-(--font)">
            <label>{label}</label>
            {component}
        </div>
    )
}