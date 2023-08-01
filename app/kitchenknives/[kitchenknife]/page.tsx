import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { KitchenKnife, listOfKitchenKnives, KnifeSteelList, DimensionList, KitchenKnifeDetailsPageProps } from "../types"
import Image from "next/image";
import { KnifeInfo } from "./knifeInfo";
import { IFetchHeaderConfig } from "@/app/util/types";

const measurementDict = {
    totalLength : "mm",
    edgeLength : "mm",
    handleToTip : "mm",
    height : "mm",
    thicknessAtHandle : "mm",
    handleLength : "mm",
    weight : "g"
}

export default async function KitchenKnifeDetail({ params }: KitchenKnifeDetailsPageProps) { 

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = {
        isMock: true,
        url: "",
        endpoint: "kitchenknife", //TODO fix to real endpoint
        headerConfig
    }

    const listOfKitchenKnives = await genericFetch(fetchConfig) as listOfKitchenKnives
    const getKnifeById = listOfKitchenKnives.find(knife => knife.uuid === params.kitchenknife) ?? {} as KitchenKnife
    const knifeSteelList: KnifeSteelList = []
    const dimensionList: DimensionList = []

    for (const dimension in getKnifeById.dimensions) {
        const customDimensionKey = (dimension as keyof typeof getKnifeById.dimensions);
        const dimensionProperty = getKnifeById.dimensions[customDimensionKey]
        dimensionList.push({
            value : dimensionProperty,
            label : dimension,
            measurement : measurementDict[customDimensionKey]
        })
    }
    
    for (const knifeSteel in getKnifeById.steel) {
        const steelProperty = getKnifeById.steel[knifeSteel as keyof typeof getKnifeById.steel]
        if (steelProperty) {
            knifeSteelList.push({
                steel : steelProperty,
                label : knifeSteel
            })
        }
    }
    
    const knifeInfoPropConfig = {
        getKnifeById,
        knifeSteelList,
        dimensionList
    }
    
    return (
        <main className="flex">

            <section className="w-full">
                <Image
                    className="w-full object-fit"
                    src={getKnifeById.img}
                    alt="alt"
                    width={400}
                    height={400}
                />
            </section>

            <KnifeInfo {...knifeInfoPropConfig}/>
        </main>
    )
}