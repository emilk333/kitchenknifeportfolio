import { IDimensionMapped, DimensionList, IDimensions } from "@/app/kitchenknives/types";
import { ReactNode } from "react";
import { InputFieldRegular } from "../Input/InputFieldRegular";

export interface SimpleTableProps {
    config: DimensionList,
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
            <td key={index} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="">
                    <tr>
                        {config.map((dimension, index) => (
                            <th key={index} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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