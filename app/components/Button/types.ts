

export interface GenericButtonProps {
    buttonConfig : {
        clickHandler : Function,
        value : string,
        request : {
            url : string,
            endpoint : string
        }
    }
}
