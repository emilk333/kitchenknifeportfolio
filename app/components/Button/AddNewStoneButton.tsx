"use client"

import { useState } from "react"
import Modal from "../Modal/Modal"
import { GenericClientButton } from "./GenericButton"
import { GenericClientButtonProps, IGenericButtonType } from "./types"
import AddStoneModal from "../Modal/AddStoneModal"

export default function AddNewStoneButton() {
    const [modalState, setModalState] = useState({ show : false})

    const toggleModal = (state: boolean) => {
        setModalState({
            show : state
        })
    }

    const buttonConfig : GenericClientButtonProps = { 
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
            <GenericClientButton {...buttonConfig} />
            <Modal modalConfig={modalConfig}>
                <AddStoneModal modalConfig={modalConfig}/>
            </Modal>
        </div>
    )
}


