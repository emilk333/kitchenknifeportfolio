import AddNewKnifeButton from "../components/Button/AddNewKnifeButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { listOfKitchenKnives } from "./types"

export default async function KitchenKnives() {

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "kitchenknife", //TODO fix to real endpoint
        headerConfig
    }

    const listOfKitchenKnives = await genericFetch(fetchConfig) as listOfKitchenKnives

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