import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { Whetstone } from "../types"
import Image from "next/image";
import { IFetchHeaderConfig } from "@/app/util/types";
import { Endpoint } from "@/app/util/endpoints";


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
        <main>
            <div>
                {/* <Image 
                        className="h-64 w-full object-cover sm:h-80 lg:h-96" 
                        src={}
                        alt="alt"
                        width={400}
                        height={400}
                /> */}
            </div>
            <div>
                {whetstone?.name}
                <div>
                    {/*  toggle inputfields for all fields in order to  
                        edit particular fields. 
                    */}
                    Editmode on / off
                </div>
            </div>
        </main>
    )
}


