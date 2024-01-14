"use client"

import { patternTypeOne } from "@/app/svg/patternType1"
import { GenericButtonProps, IGenericButtonType } from "./types"

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

export const GenericButton = (buttonProps: GenericButtonProps) => {
    const { clickHandler, value, buttonType } = buttonProps

    return (
        <button className={`${computeButtonStylingByType(buttonType)} px-4 overflow-hidden relative bg-teal-100 m-2 p-2 text-sm font-bold font-mono text-gray-900 rounded-lg border-2`} 
            onClick={() => clickHandler()}>
            {/* <div className="absolute h-full w-[150px] inset-0">
                {patternTypeOne()}
            </div> */}
            <p className="relative z-10">{value}</p>
        </button>
    )
}


