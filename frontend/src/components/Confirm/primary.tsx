import { JSX } from "react";

export default function Confirm({label, onAgree, onCancel}: {label: string, onAgree: () => void, onCancel: () => void}): JSX.Element {
    return (
        <div className="m-2 p-2 border border-amber-400 rounded-xl slide-right">
            <p>{label}</p>
            <div className="mt-2 flex justify-center gap-2">
                <button onClick={() => onAgree()} className="rounded-md m-2 p-2 border border-(--line)"><i className="bi bi-check2"></i></button>
                <button onClick={() => onCancel()} className="rounded-md m-2 p-2 border border-(--line)"><i className="bi bi-x-lg"></i></button>
            </div>
        </div>
    )
}