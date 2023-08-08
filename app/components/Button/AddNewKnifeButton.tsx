"use client"

import { useState } from "react"
import Modal from "../Modal/Modal"
import { GenericButton } from "./GenericButton"
import { GenericButtonProps } from "./types"

export default function AddNewKnifeButton() {
    const [modalState, setModalState] = useState({ show : false})

    const openModal = () => {
        setModalState({
            show : true
        })
    }

    const buttonConfig : GenericButtonProps = { 
        clickHandler : openModal,
        value : "+ Add Knife",
    }

    return (
        <div>
            <GenericButton {...buttonConfig} />
            <Modal {...modalState} />
        </div>
    )
}


