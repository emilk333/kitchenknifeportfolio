"use client"

import { GenericClientButton } from "../Button/GenericButton"
import { GenericClientButtonProps } from "../Button/types"

interface IConfirmModalProps {
    text : string
    action1Button : GenericClientButtonProps
    action2Button : GenericClientButtonProps
}

export default function ConfirmModal(confirmModalProps: IConfirmModalProps) {
    
    return (
        <div>
            <p className="mb-6 text-xl font-bold">{confirmModalProps.text}</p>
            
            <div className="flex justify-end mt-6">
                <GenericClientButton {...confirmModalProps.action1Button} />
                <GenericClientButton {...confirmModalProps.action2Button} />
            </div>
        </div>
    )
}