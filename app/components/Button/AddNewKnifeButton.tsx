"use client"

import { useEffect, useState } from "react"
import Modal from "../Modal/Modal"
import { GenericButton } from "./GenericButton"
import { GenericButtonProps } from "./types"

export default function AddNewKnifeButton() {
    const [modalState, setModalState] = useState({ show : false})

    const toggleModal = (state: boolean) => {
        setModalState({
            show : state
        })
    }

    const buttonConfig : GenericButtonProps = { 
        clickHandler : () => toggleModal(true),
        value : "+ Add Knife",
    }

    
    const modalConfig = {
        modalState : modalState,
        toggleModal
    }

    return (
        <div>
            <GenericButton {...buttonConfig} />
            <Modal {...modalConfig} />
        </div>
    )
}


