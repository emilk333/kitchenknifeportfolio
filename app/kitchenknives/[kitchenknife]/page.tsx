import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { IKitchenKnife, IKitchenKnifeDetailsPageProps } from "../types"
import Image from "next/image";
import { KnifeInfo } from "./knifeInfo";
import { IFetchHeaderConfig } from "@/app/util/types";
import { Endpoint } from "@/app/util/endpoints";
import { dimensionListMapped, steelListMapped } from "./transformToViewData";
import { supabase } from "@/app/supabase/supabase";



export default async function KitchenKnifeDetail({ params }: IKitchenKnifeDetailsPageProps) { 

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = {
        endpoint: Endpoint.KNIFE_BY_ID,
        queryParam: params.kitchenknife,
        headerConfig
    }

    const kitchenknife = await genericFetch<IKitchenKnife>(fetchConfig)
    
    const knifeInfoPropConfig = {
        kitchenknife,
        knifeSteelList: steelListMapped(kitchenknife),
        dimensionList: dimensionListMapped(kitchenknife)
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