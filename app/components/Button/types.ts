

export enum IGenericButtonType {
    REJECT,
    ACCEPT,
    NEUTRAL
}
export interface GenericClientButtonProps {
    clickHandler: () => Promise<void>,
    value: string,
    buttonType: IGenericButtonType
}

export interface GenericServerButtonProps {
    formAction: string | ((formData: FormData) => void) | undefined,
    value: string,
    buttonType: IGenericButtonType
}

export interface IModalProps { 
    children: React.ReactNode, 
    modalConfig: {
        modalState : {
            show: boolean
        }
        toggleModal: (state: boolean) => void
    } 
}
