"use client"

import { ToggleButton } from "@/app/components/Button/ToggleButton"
import { Whetstone } from "../types"
import { ReactNode, useState } from "react"
import { InputFieldRegular } from "@/app/components/Input/InputFieldRegular"
import { IFetchHeaderConfig } from "@/app/util/types"
import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { Endpoint } from "@/app/util/endpoints"
import Image from "next/image";
import { GenericButtonProps, IGenericButtonType } from "@/app/components/Button/types"
import { GenericButton } from "@/app/components/Button/GenericButton"

interface IKnifeInfoProps {
    whetstone: Whetstone,
}


export const WhetstoneInfo = (whetstoneInfoProps: IKnifeInfoProps) => {
    const stone = whetstoneInfoProps.whetstone
    const [editMode, setEditMode] = useState(false)

    //TODO Fix this useState shitshow and drop into a better structure 
    const [inputBrand, setInputBrand] = useState(stone.brand)
    const [inputName, setInputName] = useState(stone.name)
    const [inputMine, setInputMine] = useState(stone.mine)
    const [inputHardness, setInputHardness] = useState(stone.hardness)
    const [inputFineness, setInputFineness] = useState(stone.fineness)
    const [inputSpeed, setInputSpeed] = useState(stone.speed)
    const [inputLayer, setInputLayer] = useState(stone.layer)
    const [inputSize, setInputSize] = useState(stone.size)
    const [inputWeight, setInputWeight] = useState(stone.weight)
    const [inputRetailerNote, setInputRetailerNote] = useState(stone.retailerNotes)
    const [inputUsageNotes, setInputUsageNotes] = useState(stone.usageNotes)
    const [inputUsageOriginalUrl, setInputOriginalUrl] = useState(stone.originalUrl)
    const [inputRecommendedUsage, setInputRecommendedUsage] = useState(stone.recommendedUsage)
    const [inputOriginalPrice, setInputOriginalPrice] = useState(stone.originalPrice)

    const updateStateAfterStoneEdit = (updatedStone: any) => {
        setInputBrand(updatedStone.brand)
        setInputName(updatedStone.name)
        setInputMine(updatedStone.type)
        setInputHardness(updatedStone.smith)
        setInputFineness(updatedStone.sharpener)
        setInputSpeed(updatedStone.producingArea)
        setInputLayer(updatedStone.handle)
        setInputRetailerNote(updatedStone.retailerNotes)
        setInputUsageNotes(updatedStone.stonePairingNotes)
        setInputOriginalUrl(updatedStone.originalUrl)
        setInputRecommendedUsage(updatedStone.recommendedUsage)
        setInputOriginalPrice(updatedStone.originalPrice)
    }

    const saveEditedStone = () => {
        // console.log("save options")

        // const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }
        // headerConfig.method = "POST"

        // const postModel: IKnifeInfoEdited = {
        //     brand: inputBrand,
        //     name: inputName,
        //     type: inputType,
        //     // TODO Fix this utter retardation by having a proper data model
        //     steel: {
        //         construction: inputKnifeSteel[0].value.toString() ?? "",
        //         coreSteel: inputKnifeSteel[1].value.toString() ?? "",
        //         cladding: inputKnifeSteel[2].value.toString() ?? "",
        //         hrc: parseInt(inputKnifeSteel[3].value.toString()) ?? 0,
        //     },
        //     // TODO Fix this utter retardation by having a proper data model
        //     dimensions: {
        //         edgeLength: inputDimensions[0].value,
        //         handleLength: inputDimensions[1].value,
        //         handleToTip: inputDimensions[2].value,
        //         height: inputDimensions[3].value,
        //         thicknessAtHandle: inputDimensions[4].value,
        //         totalLength: inputDimensions[5].value,
        //         weight: inputDimensions[6].value,
        //     },
        //     smith: inputSmith,
        //     sharpener: inputSharpener,
        //     producingArea: inputProducingArea,
        //     handle: inputHandle,
        //     retailerNote: inputRetailerNote,
        //     stoneNote: inputStoneNote
        // }

        // headerConfig.body = JSON.stringify(postModel)

        // const fetchConfig = {
        //     endpoint: Endpoint.EDIT_KNIFE,
        //     headerConfig
        // }

        // genericFetch<IKitchenKnife>(fetchConfig).then(data => updateStateAfterKnifeEdit(data))
    }

    const handleCallback = (editMode: boolean) => {
        if (!editMode) saveEditedStone()
        setEditMode(editMode)
    }

    const buttonProps = {
        clickHandler: handleCallback,
        state: editMode
    }

    const renderBrand = (): ReactNode => {
        const inputBrandConfig = {
            clickHandler: (newValue: string) => setInputBrand(newValue),
            currentValue: inputBrand,
            label: "brand",
            id: 1
        }
        return editMode ? <InputFieldRegular {...inputBrandConfig} /> : <span>{inputBrand}</span>
    }

    const renderName = (): ReactNode => {
        const inputNameConfig = {
            clickHandler: (newValue: string) => setInputName(newValue),
            currentValue: inputName,
            label: "name",
            id: 2
        }
        return editMode ? <InputFieldRegular {...inputNameConfig} /> : <span>{inputName}</span>
    }

    const renderMine = (): ReactNode => {
        const inputMineConfig = {
            clickHandler: (newValue: string) => setInputMine(newValue),
            currentValue: inputMine,
            label: "mine",
            id: 3
        }
        return editMode ? <InputFieldRegular {...inputMineConfig} /> : <span>{inputMine}</span>
    }


    const renderWeight = (): ReactNode => {
        const inputWeightConfig = {
            clickHandler: (newValue: number) => setInputWeight(newValue),
            currentValue: inputWeight,
            label: "weight",
            id: 4
        }
        return editMode ? <InputFieldRegular {...inputWeightConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Weight: <span>{inputWeight}</span></label>
        </div>
    }

    const renderHardness = (): ReactNode => {
        const inputHardnessConfig = {
            clickHandler: (newValue: number) => setInputHardness(newValue),
            currentValue: inputHardness,
            label: "hardness",
            id: 5
        }
        return editMode ? <InputFieldRegular {...inputHardnessConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Hardness: <span>{inputHardness}</span></label>
        </div>
    }

    const renderFineness = (): ReactNode => {
        const inputFinenessConfig = {
            clickHandler: (newValue: number) => setInputFineness(newValue),
            currentValue: inputFineness,
            label: "fineness",
            id: 6
        }
        return editMode ? <InputFieldRegular {...inputFinenessConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Fineness: <span>{inputFineness}</span></label>
        </div>
    }

    const renderSpeed = (): ReactNode => {
        const inputSpeedConfig = {
            clickHandler: (newValue: number) => setInputSpeed(newValue),
            currentValue: inputSpeed,
            label: "speed",
            id: 7
        }
        return editMode ? <InputFieldRegular {...inputSpeedConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Speed: <span>{inputSpeed}</span></label>
        </div>
    }

    const renderLayer = (): ReactNode => {
        const inputLayerConfig = {
            clickHandler: (newValue: string) => setInputLayer(newValue),
            currentValue: inputLayer,
            label: "layer",
            id: 8
        }
        return editMode ? <InputFieldRegular {...inputLayerConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Mine layer: <span>{inputLayer}</span> </label> 
        </div>
    }

    const renderRetailerNote = (): ReactNode => {
        const inputRetailerNoteConfig = {
            clickHandler: (newValue: string) => setInputRetailerNote(newValue),
            currentValue: inputRetailerNote,
            label: "retailer note",
            id: 9
        }
        return editMode ? <InputFieldRegular {...inputRetailerNoteConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Retailer notes</h2>
            <p>{inputRetailerNote}</p>
        </div>
    }

    const renderUsageNotes = (): ReactNode => {
        const inputUsageNotesConfig = {
            clickHandler: (newValue: string) => setInputUsageNotes(newValue),
            currentValue: inputRetailerNote,
            label: "usage-notes",
            id: 10
        }
        return editMode ? <InputFieldRegular {...inputUsageNotesConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Usage notes</h2>
            <p>{inputUsageNotes}</p>
        </div>
    }

    const renderRecommendedFor = (): ReactNode => {
        const inputRecommendedForConfig = {
            clickHandler: (newValue: string) => setInputRecommendedUsage(newValue),
            currentValue: inputRetailerNote,
            label: "recommended-for",
            id: 11
        }
        return editMode ? <InputFieldRegular {...inputRecommendedForConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Recommended usage</h2>
            <p>{inputRecommendedUsage}</p>
        </div>
    }

    const renderSize = (): ReactNode => {
        const inputSizeConfig = {
            clickHandler: (newValue: string) => setInputSize(newValue),
            currentValue: inputSize,
            label: "size",
            id: 12
        }
        return editMode ? <InputFieldRegular {...inputSizeConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Stone dimensions: <span>{inputSize}</span></h2>
        </div>
    }

    const renderOriginalPrice = (): ReactNode => {
        const inputOriginalPriceConfig = {
            clickHandler: (newValue: string) => setInputOriginalPrice(newValue),
            currentValue: inputOriginalPrice,
            label: "size",
            id: 12
        }
        return editMode ? <InputFieldRegular {...inputOriginalPriceConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Original price: <span>{inputOriginalPrice}</span></h2>
        </div>
    }

    const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }

    const buttonConfigCloseModal: GenericButtonProps = {
        clickHandler: () => {
            headerConfig.method = "DELETE"
            const fetchConfigToDeleteKnife = {
                endpoint: Endpoint.DELETE_KNIFE,
                queryParam: stone.uuid,
                headerConfig: headerConfig as RequestInit,
            }

            let url = `${process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : ''}${fetchConfigToDeleteKnife.endpoint}`
            
            // TODO Maybe do some loading??? 
            // TODO reason we are using node fetch here, is because I can't be bothered to make the genericFetch both return void and Promise<T>
            fetch(`${url}/${fetchConfigToDeleteKnife.queryParam}`, fetchConfigToDeleteKnife.headerConfig).then(res => {
                if (res.ok) {
                    console.log("Stone has been deleted from database")
                }
            })

            //genericFetch<IKitchenKnife>(fetchConfigToDeleteKnife)
        },
        value: "Delete",
        buttonType: IGenericButtonType.REJECT
    }

    return (
        <section className="w-[calc(100%+4px)] -mx-[2px] md:mx-0 mb:w-full">

            <div className="flex justify-end h-16">
                <ToggleButton {...buttonProps} />
                <div className="z-30 flex items-center">
                    <GenericButton {...buttonConfigCloseModal} />
                </div>
            </div>

            <div className="w-full max-h-24 relative h-24 border-2 border-slate-400 border-b-0">
                <Image
                    className="w-full object-cover"
                    src={stone.img}
                    alt="alt"
                    fill
                />
            </div>

            <header className="border-2 border-slate-400 border-b-0 p-4">
                <h1 className="font-bold text-3xl mb-2">
                    {renderBrand()} {renderName()} {renderMine()}
                </h1>
                <ul>
                    <li>{renderLayer()}</li>
                    <li>{renderHardness()}</li>
                    <li>{renderFineness()}</li>
                    <li>{renderSpeed()}</li>
                    <li>{renderWeight()}</li>
                    <li>{renderSize()}</li>
                    <li>{renderOriginalPrice()}</li>
                </ul>
            </header>


            {/* <div className="-ms-0.5 flex">
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
                </div> */}


            <div className="border-2 border-slate-400 p-4">
                {renderRetailerNote()}
                {renderUsageNotes()}
                {renderRecommendedFor()}
            </div>
        </section>
    )
}

