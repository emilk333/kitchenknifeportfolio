import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { genericFetch } from "../util/fetch"
import { listOfWhetstones } from "./types"


export default async function Whetstones() {

    const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "whetstone" //TODO fix to real endpoint
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

