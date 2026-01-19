'use client'
import Modal from "@/components/Modal/primary";
import { Address, Birth, Patient } from "@/types/patient";
import { JSX, useRef, useState } from "react";
import { isFormEmpty } from "../action";
import Input from "@/components/Input/Primary";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Child {
    close: () => void
}

interface Input {
  label: string,
  component: JSX.Element
}

export default function ModalRegister({close}: Child): JSX.Element {

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => close());

  return (
    <Modal>
      <div ref={ref} className="w-[95%] h-[90%] bg-background border border-(--line) rounded-2xl flex">
        <div className="w-30%">
          <button onClick={() => close()}>Close</button>
        </div>
        <div className="w-70%"></div>
      </div>
    </Modal>
  )
}