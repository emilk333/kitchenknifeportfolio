import { IDimensionMapped, IKitchenKnife, IKnifeSteelMapped } from "../types";



export const dimensionListMapped = (kitchenknife: IKitchenKnife): IDimensionMapped[] => {

    const measurementDict = {
        totalLength : "mm",
        edgeLength : "mm",
        handleToTip : "mm",
        height : "mm",
        thicknessAtHandle : "mm",
        handleLength : "mm",
        weight : "g"
    }
    
    const dimensionList: IDimensionMapped[] = []

    for (const dimension in kitchenknife.dimensions) {
        const customDimensionKey = (dimension as keyof typeof kitchenknife.dimensions);
        const dimensionProperty = kitchenknife.dimensions[customDimensionKey]
        dimensionList.push({
            value : dimensionProperty,
            label : dimension,
            measurement : measurementDict[customDimensionKey]
        })
    }

    return dimensionList
}

export const steelListMapped = (kitchenknife: IKitchenKnife): IKnifeSteelMapped[] => {
    const knifeSteelList: IKnifeSteelMapped[] = []
    
    for (const knifeSteel in kitchenknife.steel) {
        const steelProperty = kitchenknife.steel[knifeSteel as keyof typeof kitchenknife.steel]
        if (steelProperty) {
            knifeSteelList.push({
                value : steelProperty,
                label : knifeSteel
            })
        }
    }

    return knifeSteelList
}