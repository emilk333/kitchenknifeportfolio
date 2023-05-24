import { Dimensions } from "@/app/kitchenknives/types";

interface SimpleTableProps {
    config: {
        value: any
        label: string
        measurement: string
    }[]
}

export default function SimpleTable(tableConfig : SimpleTableProps) {
    const { config } = tableConfig

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="">
                    <tr>
                        {config.map(dimension => (
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {dimension.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr>
                        {config.map(dimension => (
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {dimension.value}
                                {dimension.measurement}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}