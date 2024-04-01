"use client"

import { useEffect, useState } from "react"
import { IModalProps } from "../Button/types";

export default function Modal(props: IModalProps) {
    const [internalModalState, setInternalModalState] = useState({show : false})
    
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                setInternalModalState({ show: false })
              }
        });
        setInternalModalState({ show: props.modalConfig.modalState.show })
    },[props.modalConfig.modalState])

    if (!internalModalState.show) {
        return null
    } else {
        return (
            <article className="top-36 md:top-20 left-1/2 translate-x-[-50%] max-w-[700px] w-[90%] md:w-full absolute h-fit border-2 border-slate-400 bg-paper-400 p-4 my-2 shadow-lg sm:p-6 lg:p-8">
               {props.children ?? ""}
            </article>
        )
    }
}