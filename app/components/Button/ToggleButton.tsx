"use client"



export const ToggleButton = (buttonProps : { clickHandler : Function, state : boolean }) => {
    const { clickHandler, state } = buttonProps
    return (
        <div className="flex items-center z-30">
            <p className="text-sm font-bold font-mono text-gray-900 mr-2">
                Edit
            </p>
            <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
                <input type="checkbox" id="AcceptConditions" className="peer sr-only" onChange={() => clickHandler(!state)}/>
                <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
        </div>
    )
}

