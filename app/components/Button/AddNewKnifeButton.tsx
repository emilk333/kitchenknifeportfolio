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

    const addNewKnife = () => {
        openModal()
        console.log("Add new knife!")
    }

    const buttonConfig : GenericButtonProps = { 
        clickHandler : addNewKnife,
        value : "+ Add Knife",
        request : {
            url: "",
            endpoint: "kitchenknife" //TODO fix to real endpoint
        }
    }

    return (
        <div>
            <GenericButton {...buttonConfig} />
            <Modal {...modalState} />
        </div>
    )
}


