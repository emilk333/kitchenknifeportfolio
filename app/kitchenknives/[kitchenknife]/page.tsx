import { genericFetch } from "@/app/util/fetch"
import { KitchenKnife, Dimensions, listOfKitchenKnives } from "../types"
import Image from "next/image";
import SimpleTable from "@/app/components/Table/SimpleTable";

interface KitchenKnifeDetailsPageProps {
    params :  {
        kitchenknife : string
    }
}

const measurementDict = {
    totalLength : "mm",
    edgeLength : "mm",
    handleToTip : "mm",
    height : "mm",
    thicknessAtHandle : "mm",
    handleLength : "mm",
    weight : "g"
}

export default async function KitchenKnifeDetail({ params }: KitchenKnifeDetailsPageProps) { 

    const fetchConfig = {
        isMock: true,
        url: "",
        endpoint: "kitchenknife" //TODO fix to real endpoint
    }

    const listOfKitchenKnives = await genericFetch(fetchConfig) as listOfKitchenKnives
    const getKnifeById = listOfKitchenKnives.find(knife => knife.uuid === params.kitchenknife) ?? {} as KitchenKnife
    const knifeSteelList = []
    const dimensionList = []

    for (const dimension in getKnifeById.dimensions) {
        //@ts-ignore
        const dimensionProperty = getKnifeById.dimensions[dimension]
        if (dimensionProperty) {
            dimensionList.push({
                value : dimensionProperty,
                label : dimension,
                //@ts-ignore
                measurement : measurementDict[dimension]
            })
        }
    }
    
    for (const knifeSteel in getKnifeById.steel) {
        //@ts-ignore
        const steelProperty = getKnifeById.steel[knifeSteel]
        if (steelProperty) {
            knifeSteelList.push({
                steel : steelProperty,
                label : knifeSteel
            })
        }
    }
    
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
                <div className="flex">
                    Editmode
                    <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
                        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                        <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
                    </label>
                </div>

                <header>
                    <span>{getKnifeById.brand}</span>
                    <h1 className="font-bold text-3xl">
                        {getKnifeById.name} {getKnifeById.type} {getKnifeById.steel.coreSteel}
                    </h1>
                </header>

                <ul>
                    <li>
                        <div>
                            <span>{getKnifeById.smith ? 'Smith' : ''}</span>
                            <span>{getKnifeById.sharpener ? '/Sharpener' : ''}</span>
                        </div>
                        <span>{getKnifeById.smith}/{getKnifeById.sharpener}</span>
                    </li>
                    <li>
                        <span>{getKnifeById.producingArea ? 'Area of produktion' : ''}</span>
                        <span>{getKnifeById.producingArea}</span>
                    </li>
                    <li>
                        <span>{getKnifeById.producingArea ? 'Handle' : ''}</span>
                        <span>{getKnifeById.handle}</span>
                    </li>
                </ul>

                <div className="-ms-0.5 flex">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>

                <div>
                    <h2>Steel</h2>
                    {knifeSteelList.map(data => (
                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            {data.label} : {data.steel}
                        </span>
                    ))}
                </div>

                <div>
                    <h2>Dimensions</h2>
                    <SimpleTable config={dimensionList}/>
                </div>

                <div>
                    <h2>Retailer notes</h2>
                    <p>{getKnifeById.retailerNotes}</p>
                </div>

                <div>
                    <h2>Retailer notes</h2>
                    <p>{getKnifeById.retailerNotes}</p>
                </div>

                <div>
                    <h2>Personal stone pairing notes</h2>
                    <p>{getKnifeById.stonePairingNotes}</p>
                </div>

            </section>
        </main>
    )
}