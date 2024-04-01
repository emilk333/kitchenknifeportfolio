"use client"

import { GenericButton } from "../Button/GenericButton"
import { GenericButtonProps } from "../Button/types"

interface IConfirmModalProps {
    text : string
    action1Button : GenericButtonProps
    action2Button : GenericButtonProps
}

export default function ConfirmModal(confirmModalProps: IConfirmModalProps) {
    
    return (
        <div>
            <p className="mb-6 text-xl font-bold">{confirmModalProps.text}</p>
            
            <div className="flex justify-end mt-6">
                <GenericButton {...confirmModalProps.action1Button} />
                <GenericButton {...confirmModalProps.action2Button} />
            </div>
        </div>
    )
}