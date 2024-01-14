

export enum IGenericButtonType {
    REJECT,
    ACCEPT,
    NEUTRAL
}
export interface GenericButtonProps {
    clickHandler: Function,
    value: string,
    buttonType: IGenericButtonType
}
