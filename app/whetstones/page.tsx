import { redirect } from "next/navigation"
import AddNewStoneButton from "../components/Button/AddNewStoneButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { createClient } from "../supabase/server"
import { Endpoint } from "../util/endpoints"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { IWhetstone } from "./types"


export default async function Whetstones() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        redirect('/')
    }

    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        endpoint: Endpoint.ALL_STONES,
        headerConfig
    }

    const listOfWhetstones = await genericFetch<IWhetstone[]>(fetchConfig)

    return (
        <main className="flex flex-col mb-12 w-full max-w-3xl">
            <div className="flex justify-end h-16">
                <AddNewStoneButton />
            </div>
            <ul className="w-full">
                {listOfWhetstones.map(stone => (
                    <li className="border-slate-400 border-2 -mt-[2px]">
                        <Card cardData={stone} type={ItemTypes.WhetStone}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

