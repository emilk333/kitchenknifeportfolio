import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { Endpoint } from "../util/endpoints"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { Whetstone } from "./types"


export default async function Whetstones() {
    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        endpoint: Endpoint.ALL_STONES,
        headerConfig
    }

    const listOfWhetstones = await genericFetch<Whetstone[]>(fetchConfig)

    return (
        <main>
            <ul className="grid gap-16 grid-cols-fluid">
                {listOfWhetstones.map(stone => (
                    <li>
                        <Card cardData={stone} type={ItemTypes.WhetStone}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

