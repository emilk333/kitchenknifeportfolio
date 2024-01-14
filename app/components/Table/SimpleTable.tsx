import { IDimensionMapped } from "@/app/kitchenknives/types";
import { ReactNode } from "react";
import { InputFieldRegular } from "../Input/InputFieldRegular";

export interface SimpleTableProps {
    config: IDimensionMapped[],
    editModeState: boolean,
    callback: Function
}

export default function SimpleTable(tableConfig : SimpleTableProps) {
    const { config, editModeState, callback } = tableConfig

    const renderTableCell = (dimension: IDimensionMapped, index: number): ReactNode => {

        const inputTableCellConfig = {
            clickHandler: (newValue : number) => {
                const newArr = [...config]
                newArr[index].value = newValue
                callback(newArr)
            },
            currentValue: config[index].value,
            label: `dimension-${config[index].label}`,
            id: 11
        }

        return (
            <td key={index} className="whitespace-nowrap font-medium text-gray-900">
                {editModeState ? 
                    <InputFieldRegular {...inputTableCellConfig}/>
                    :
                    dimension.value ? 
                        <span>
                            {dimension.value}
                            {dimension.measurement}
                        </span>
                        : "-"
                }
            </td> 
        )
    }

    return (
        <div className="overflow-x-auto rounded-md">
            <table className="w-full bg-paper-600c divide-y-2 divide-gray-200 bg-paper-400 text-sm">
                <thead className="">
                    <tr>
                        {config.map((dimension, index) => (
                            <th key={index} className="text-left whitespace-nowrap pr-6 font-medium text-gray-900">
                                {dimension.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr>
                    {config.map((dimension, index) => (
                            renderTableCell(dimension, index)
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}