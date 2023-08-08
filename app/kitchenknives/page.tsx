
import AddNewKnifeButton from "../components/Button/AddNewKnifeButton"
import Card from "../components/Cards/Card"
import { ItemTypes } from "../sharedTypes"
import { Endpoint } from "../util/endpoints"
import { defaultHeaderConfig, genericFetch } from "../util/fetch"
import { IFetchHeaderConfig } from "../util/types"
import { IKitchenKnife } from "./types"
import { supabase } from "../supabase/supabase"
import { redirect } from 'next/navigation';

export default async function KitchenKnives() {
    
    const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"

    const fetchConfig = { 
        endpoint: Endpoint.ALL_KNIVES,
        headerConfig
    }

    let listOfKitchenKnives = await genericFetch<IKitchenKnife[]>(fetchConfig)

    // TODO TIMES ARE DEPRESSING: YOU CAN ONLY DO THIS IF YOU ARE ON THE CLIENT SIDE 
    // const x = supabase
    //     .channel('schema-db-changes')
    //     .on('postgres_changes',
    //         {
    //         event: 'INSERT',
    //         schema: 'public',
    //         table: 'kitchen_knives'
    //         },
    //         (payload) => {

    //             redirect('/')
    //         }
    //     )
    //     .subscribe()
 
    return (
        <main>
            <div className="z-10 relative right-0">
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