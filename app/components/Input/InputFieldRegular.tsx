
interface IInputFieldRegularProps {
    clickHandler: Function,
    currentValue: string | number,
    label: string,
    id: number
}

export const InputFieldRegularText = (props: IInputFieldRegularProps) => {
    const { clickHandler, currentValue, label, id } = props
    
    return (
        <div className="mb-4">
            <label className="capitalize block mb-1 text-sm font-medium text-gray-900 dark:text-white" htmlFor={label+id}>{label}</label>
            <input className="bg-paper-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value={currentValue || ""} 
                onChange={(e) => clickHandler(e.target.value)} 
                type="input" 
                name={label} 
                id={label+id}/>
        </div>
    )
}

export const InputFieldRegularNumber = (props: IInputFieldRegularProps) => {
    const { clickHandler, currentValue, label, id } = props
    
    return (
        <div className="mb-4">
            <label className="capitalize block mb-1 text-sm font-medium text-gray-900 dark:text-white" htmlFor={label+id}>{label}</label>
            <input className="bg-paper-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value={currentValue || 0} 
                onChange={(e) => clickHandler(e.target.value)} 
                type="number" 
                name={label} 
                id={label+id}/>
        </div>
    )
}