import AddNewKnifeButton from "../components/Button/AddNewKnifeButton"
import GenericButton from "../components/Button/GenericButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { genericFetch } from "../util/fetch"
import { listOfKitchenKnives } from "./types"

export default async function KitchenKnives() {

    const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "kitchenknife" //TODO fix to real endpoint
    }

    const listOfKitchenKnives = await genericFetch(fetchConfig) as listOfKitchenKnives

    return (
        <main>
            <div>
                {/* <AddNewKnifeButton>
                    <GenericButton/>
                </AddNewKnifeButton> */}
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