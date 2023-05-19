"use client"

import { GenericButtonProps } from "./types"


export default function AddNewKnifeButton({ children } : { children: React.ReactNode }) {

    const addNewKnife = () => {
        // Pop up with textarea, where one can inject json. Should be easier. 
        console.log("Add new knife!")
    }

    const addKnifeButtonConfig = { 
        clickHandler : addNewKnife,
        value : "+ Add Knife",
        request : {
            url: "",
            endpoint: "kitchenknife" //TODO fix to real endpoint
        }
    }

    return (
        <div>
            {children}
        </div>
    )
}