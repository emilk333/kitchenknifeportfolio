import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { listOfWhetstones } from "./types"


export default async function Whetstones() {
    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "whetstone", //TODO fix to real endpoint
        headerConfig
    }

    const listOfWhetstones = await genericFetch(fetchConfig) as listOfWhetstones

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

