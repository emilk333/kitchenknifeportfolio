import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { KitchenKnife, KnifeSteelList, DimensionList, KitchenKnifeDetailsPageProps } from "../types"
import Image from "next/image";
import { KnifeInfo } from "./knifeInfo";
import { IFetchHeaderConfig } from "@/app/util/types";
import { Endpoint } from "@/app/util/endpoints";

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
        endpoint: Endpoint.KNIFE_BY_ID,
        queryParam: params.kitchenknife,
        headerConfig
    }

    const kitchenknife = await genericFetch<KitchenKnife>(fetchConfig)
    const knifeSteelList: KnifeSteelList = []
    const dimensionList: DimensionList = []

    for (const dimension in kitchenknife.dimensions) {
        const customDimensionKey = (dimension as keyof typeof kitchenknife.dimensions);
        const dimensionProperty = kitchenknife.dimensions[customDimensionKey]
        dimensionList.push({
            value : dimensionProperty,
            label : dimension,
            measurement : measurementDict[customDimensionKey]
        })
    }
    
    for (const knifeSteel in kitchenknife.steel) {
        const steelProperty = kitchenknife.steel[knifeSteel as keyof typeof kitchenknife.steel]
        if (steelProperty) {
            knifeSteelList.push({
                steel : steelProperty,
                label : knifeSteel
            })
        }
    }
    
    const knifeInfoPropConfig = {
        kitchenknife,
        knifeSteelList,
        dimensionList
    }
    
    return (
        <main className="flex">

            <section className="w-full">
                <Image
                    className="w-full object-fit"
                    //src={kitchenknife.img}
                    src="https://images.pexels.com/photos/10046550/pexels-photo-10046550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="alt"
                    width={400}
                    height={400}
                />
            </section>

            <KnifeInfo {...knifeInfoPropConfig}/>
        </main>
    )
}