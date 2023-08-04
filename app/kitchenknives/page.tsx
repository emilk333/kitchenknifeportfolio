import AddNewKnifeButton from "../components/Button/AddNewKnifeButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { Endpoint } from "../util/endpoints"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { KitchenKnife } from "./types"

export default async function KitchenKnives() {

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        endpoint: Endpoint.ALL_KNIVES,
        headerConfig
    }

    const listOfKitchenKnives = await genericFetch<KitchenKnife[]>(fetchConfig)
 
    return (
        <main>
            <div>
            <AddNewKnifeButton />
            </div>
            <ul className="grid gap-16 grid-cols-fluid">
                {listOfKitchenKnives.map(knife => (
                    <li>
                        <Card cardData={knife} type={ItemTypes.KitchenKnife}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}