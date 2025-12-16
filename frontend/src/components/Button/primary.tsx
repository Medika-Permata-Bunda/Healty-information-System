import { JSX } from "react";
import { Test } from "./action";

export default function Button(): JSX.Element {
    return (
        <button onClick={() => Test}>Click</button>
    )
}