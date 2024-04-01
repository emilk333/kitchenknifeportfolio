import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { IKitchenKnife, IKitchenKnifeDetailsPageProps } from "../types"
import Image from "next/image";
import { KnifeInfo } from "./knifeInfo";
import { IFetchHeaderConfig } from "@/app/util/types";
import { Endpoint } from "@/app/util/endpoints";
import { dimensionListMapped, steelListMapped } from "./transformToViewData";


export default async function KitchenKnifeDetail({ params }: IKitchenKnifeDetailsPageProps) { 

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"
    
    const fetchConfigToGetKnife = {
        endpoint: Endpoint.KNIFE_BY_ID,
        queryParam: params.kitchenknife,
        headerConfig
    }

    const kitchenknife = await genericFetch<IKitchenKnife>(fetchConfigToGetKnife)
    const knifeInfoPropConfig = {
        kitchenknife,
        knifeSteelList: steelListMapped(kitchenknife),
        dimensionList: dimensionListMapped(kitchenknife),
    }

    return (
        <main className="flex max-w-3xl w-full md:mb-16 mb-0">
            <KnifeInfo {...knifeInfoPropConfig}/>
        </main>
    )
}