"use client"

import { GenericButtonProps } from "./types"



export const GenericButton = (buttonProps: GenericButtonProps) => {
    const { clickHandler, value } = buttonProps
    return (
        <button onClick={() => clickHandler()}>
            {value}
        </button>
    )
}

