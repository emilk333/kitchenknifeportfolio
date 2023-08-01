
interface IInputFieldRegularProps {
    clickHandler: Function,
    currentValue: string | number,
    label: string,
    id: number
}

export const InputFieldRegular = (props: IInputFieldRegularProps) => {
    const { clickHandler, currentValue, label, id } = props
    
    return (
        <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={label+id}>{label}</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value={currentValue} 
                onChange={(e) => clickHandler(e.target.value)} 
                type="input" 
                name={label} 
                id={label+id}/>
        </div>
    )
}