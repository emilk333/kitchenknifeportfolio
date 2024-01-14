import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { Whetstone } from "../types"
import Image from "next/image";
import { IFetchHeaderConfig } from "@/app/util/types";
import { Endpoint } from "@/app/util/endpoints";
import { WhetstoneInfo } from "./whetstoneInfo";


export default async function WhetstoneDetail({ params }: any) {

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = {
        endpoint: Endpoint.STONE_BY_ID,
        queryParam: params.whetstone,
        headerConfig
    }

    const whetstone = await genericFetch<Whetstone>(fetchConfig)

    return (
        <main className="flex max-w-3xl w-full md:mb-16 mb-0">
            <WhetstoneInfo whetstone={whetstone}/>
        </main>
    )
}

