import { genericFetch } from "@/app/util/fetch"
import { KitchenKnife, listOfKitchenKnives } from "../types"
import Image from "next/image";


export default async function KitchenKnifeDetail({params} : any) { //TODO Fix any type
    
    const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "kitchenknife" //TODO fix to real endpoint
    }

    const listOfKitchenKnives = await genericFetch(fetchConfig) as listOfKitchenKnives
    const getKnifeById = listOfKitchenKnives.find(knife => knife.uuid === params.kitchenknife) ?? {} as KitchenKnife
    
    return (
        <main className="flex">
            <section className="w-full">
                <Image 
                        className="w-full object-fit" 
                        src={getKnifeById.img}
                        alt="alt"
                        width={400}
                        height={400}
                />
            </section>
            <section className="w-full">
                <div>
                    {/*  toggle inputfields for all fields in order to  
                        edit particular fields. 
                    */}
                    Editmode on / off
                </div>
                <header>
                    <span>{getKnifeById.brand}</span>
                    <h1>{getKnifeById.name}</h1>
                </header>

                <div>
                    
                </div>
            </section>
        </main>
    )
}