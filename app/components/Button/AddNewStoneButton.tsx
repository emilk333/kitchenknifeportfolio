"use client"

import { useState } from "react"
import Modal from "../Modal/Modal"
import { GenericButton } from "./GenericButton"
import { GenericButtonProps, IGenericButtonType } from "./types"
import AddStoneModal from "../Modal/AddStoneModal"

export default function AddNewStoneButton() {
    const [modalState, setModalState] = useState({ show : false})

    const toggleModal = (state: boolean) => {
        setModalState({
            show : state
        })
    }

    const buttonConfig : GenericButtonProps = { 
        clickHandler : async () => toggleModal(true),
        value : "+ Add Stone",
        buttonType : IGenericButtonType.NEUTRAL
    }
    
    const modalConfig = {
        modalState : modalState,
        toggleModal
    }

    return (
        <div className="z-40">
            <GenericButton {...buttonConfig} />
            <Modal modalConfig={modalConfig}>
                <AddStoneModal modalConfig={modalConfig}/>
            </Modal>
        </div>
    )
}


