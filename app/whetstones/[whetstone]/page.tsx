import { genericFetch } from "@/app/util/fetch"
import { listOfWhetstones } from "../types"
import Image from "next/image";


export default async function WhetstoneDetail({params} : any) {

       const fetchConfig = { 
        isMock: true, 
        url: "",
        endpoint: "whetstone" //TODO fix to real endpoint
    }

    const listOfWhetstones = await genericFetch(fetchConfig) as listOfWhetstones
    const getStoneById = listOfWhetstones.find(knife => knife.uuid === params.whetstone)
    

    return (
        <main>
            <div>
                {/* <Image 
                        className="h-64 w-full object-cover sm:h-80 lg:h-96" 
                        src={}
                        alt="alt"
                        width={400}
                        height={400}
                /> */}
            </div>
            <div>
                {getStoneById?.name}
                <div>
                    {/*  toggle inputfields for all fields in order to  
                        edit particular fields. 
                    */}
                    Editmode on / off
                </div>
            </div>
        </main>
    )
}


