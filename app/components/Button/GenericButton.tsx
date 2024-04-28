"use client"

import { useState } from "react"
import { GenericClientButtonProps, GenericServerButtonProps, IGenericButtonType } from "./types"
import { loadingSpinner } from "@/app/util/loadingSpinner"

const computeButtonStylingByType = (buttonType: IGenericButtonType) => {
    let buttonClass = ""
    switch (buttonType) {
        case IGenericButtonType.REJECT:
            buttonClass = "bg-red-400 hover:bg-red-500"
            break;
        case IGenericButtonType.ACCEPT:
            buttonClass = "bg-green-400 hover:bg-green-500"
            break;
        case IGenericButtonType.NEUTRAL:
            buttonClass = "bg-paper-400 hover:bg-paper-600"
            break;
        default:
          console.log("Button type could not be determined");
      }
    return buttonClass + " duration-300 transition ease"
}

export const GenericClientButton = (buttonProps: GenericClientButtonProps) => {
    const { clickHandler: clickHandlerProp, value, buttonType } = buttonProps
    const [loading, setLoading] = useState(false)

    const clickHandler = () => {
        setLoading(true)
        clickHandlerProp().then(() => setLoading(false)) // This is a stupid hack. Not all functions should run this. 
    }

    return (
        <button className={`${computeButtonStylingByType(buttonType)} px-4 overflow-hidden relative bg-teal-100 m-2 p-2 text-sm font-bold font-mono text-gray-900 rounded-lg border-2`} 
            onClick={() => clickHandler()}>
            {loading ?  <div className="h-6 flex justify-center items-center">
                            {loadingSpinner("h-6", "w-6")}
                        </div>
                        : <p className="relative z-10">{value}</p>}
        </button>
    )
}

export const GenericServerButton = (buttonProps: GenericServerButtonProps) => {
    const { value, buttonType, formAction } = buttonProps
    
    return (
        <button className={`${computeButtonStylingByType(buttonType)} px-4 overflow-hidden relative bg-teal-100 m-2 p-2 text-sm font-bold font-mono text-gray-900 rounded-lg border-2`} 
            formAction={formAction}
            type="submit"
            >
            <p className="relative z-10">{value}</p>
        </button>
    )
}


