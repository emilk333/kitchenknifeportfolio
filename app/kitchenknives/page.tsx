
import AddNewKnifeButton from "../components/Button/AddNewKnifeButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { Endpoint } from "../util/endpoints"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { IKitchenKnife } from "./types"

export default async function KitchenKnives() {
    
    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        endpoint: Endpoint.ALL_KNIVES,
        headerConfig
    }

    headerConfig.cache = "no-store"

    const listOfKitchenKnives = await genericFetch<IKitchenKnife[]>(fetchConfig)
 
    return (
        <main className="flex flex-col mb-12 w-full max-w-3xl">
            <div className="flex justify-end h-16">
                <AddNewKnifeButton />
            </div>
            <ul className="w-full">
                {listOfKitchenKnives.map(knife => (
                    <li className="border-slate-400 border-2 -mt-[2px]">
                        <Card cardData={knife} type={ItemTypes.KitchenKnife}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}