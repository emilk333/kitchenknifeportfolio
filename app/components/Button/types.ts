

export enum IGenericButtonType {
    REJECT,
    ACCEPT,
    NEUTRAL
}
export interface GenericButtonProps {
    clickHandler: () => Promise<void>,
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
