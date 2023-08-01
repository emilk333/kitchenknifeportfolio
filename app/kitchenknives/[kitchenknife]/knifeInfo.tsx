"use client"

import { ToggleButton } from "@/app/components/Button/ToggleButton"
import SimpleTable, { SimpleTableProps } from "@/app/components/Table/SimpleTable"
import { DimensionList, IKnifeInfoEdited, KitchenKnife, KnifeSteel, KnifeSteelList } from "../types"
import { ReactNode, useState } from "react"
import { InputFieldRegular } from "@/app/components/Input/InputFieldRegular"
import { IFetchHeaderConfig } from "@/app/util/types"
import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"

interface IKnifeInfoProps {
    getKnifeById : KitchenKnife,
    knifeSteelList : KnifeSteelList,
    dimensionList: DimensionList
}

export const KnifeInfo = (knifeInfoProps : IKnifeInfoProps) => {
    const { getKnifeById, knifeSteelList, dimensionList } = knifeInfoProps
    const [editMode, setEditMode] = useState(false)
    const [inputBrand, setInputBrand] = useState(getKnifeById.brand)
    const [inputName, setInputName] = useState(getKnifeById.name)
    const [inputType, setInputType] = useState(getKnifeById.type)
    const [inputCoresteel, setInputCoresteel] = useState(getKnifeById.steel.coreSteel)
    const [inputSmith, setInputSmith] = useState(getKnifeById.smith)
    const [inputSharpener, setInputSharpener] = useState(getKnifeById.sharpener)
    const [inputProducingArea, setInputProducingArea] = useState(getKnifeById.producingArea)
    const [inputHandle, setInputHandle] = useState(getKnifeById.handle)
    const [inputKnifeSteel, setInputKnifeSteel] = useState(knifeSteelList)
    const [inputDimensions, setInputDimensions] = useState(dimensionList)
    const [inputRetailerNote, setInputRetailerNote] = useState(getKnifeById.retailerNotes)
    const [inputStoneNote, setInputStoneNote] = useState(getKnifeById.stonePairingNotes)

    const saveEditedKnife = () => {
        // console.log("save options")

        // const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
        // headerConfig.method = "POST"

        // const postModel: IKnifeInfoEdited = {
        //     brand: inputBrand,
        //     name: inputName,
        //     type: inputType,
        //     steel: {
        //         steel: inputCoresteel,
        //         label: ""
        //     },
        //     dimensions: inputDimensions,
        //     smith: inputSmith,
        //     sharpener: inputSharpener,
        //     producingArea: inputProducingArea,
        //     handle: inputHandle,
        //     retailerNote: inputRetailerNote,
        //     stoneNote: inputStoneNote
        // }

        // headerConfig.body = JSON.stringify(postModel)
    
        // const fetchConfig = { 
        //     isMock: false, 
        //     url: "",
        //     endpoint: "SOMEWHERE TO POST STUFF", //TODO fix to real endpoint
        //     headerConfig
        // }

        // genericFetch(fetchConfig)
    }

    const handleCallback = (editMode: boolean) => {
        if (!editMode) saveEditedKnife()
        setEditMode(editMode)
    }

    const buttonProps = {
        clickHandler : handleCallback,
        state : editMode
    }

    const tableConfig: SimpleTableProps = {
        config: inputDimensions,
        editModeState: editMode,
        callback: setInputDimensions
    }

    const renderBrand = (): ReactNode => {
        const inputBrandConfig = {
            clickHandler: (newValue : string) => setInputBrand(newValue),
            currentValue: inputBrand,
            label: "brand",
            id: 1
        }
        return editMode ? <InputFieldRegular {...inputBrandConfig}/> : <span>{inputBrand}</span>
    }

    const renderName = (): ReactNode => {
        const inputNameConfig = {
            clickHandler: (newValue : string) => setInputName(newValue),
            currentValue: inputName,
            label: "name",
            id: 2
        }
        return editMode ? <InputFieldRegular {...inputNameConfig}/> : <span>{inputName}</span>
    }

    const renderType = (): ReactNode => {
        const inputTypeConfig = {
            clickHandler: (newValue : string) => setInputType(newValue),
            currentValue: inputType,
            label: "type",
            id: 3
        }
        return editMode ? <InputFieldRegular {...inputTypeConfig}/> : <span>{inputType}</span>
    }

    const renderCoreSteel = (): ReactNode => {
        const inputCoresteelConfig = {
            clickHandler: (newValue : string) => setInputCoresteel(newValue),
            currentValue: inputCoresteel,
            label: "coresteel",
            id: 4
        }
        return editMode ? <InputFieldRegular {...inputCoresteelConfig}/> : <span>{inputCoresteel}</span>
    }

    const renderSmith = (): ReactNode => {
        const inputSmithConfig = {
            clickHandler: (newValue : string) => setInputSmith(newValue),
            currentValue: inputSmith,
            label: "smith",
            id: 5
        }
        return editMode ? <InputFieldRegular {...inputSmithConfig}/> :  <div>
                                                                            {getKnifeById.smith ? <label>Smith: </label> : ''}
                                                                            <span>{inputSmith}</span>
                                                                        </div>
    }

    const renderSharpener = (): ReactNode => {
        const inputSharpenerConfig = {
            clickHandler: (newValue : string) => setInputSharpener(newValue),
            currentValue: inputSharpener,
            label: "sharpener",
            id: 6
        }
        return editMode ? <InputFieldRegular {...inputSharpenerConfig}/> :  <div>
                                                                                {getKnifeById.sharpener ? <label>Sharpener: </label> : ''}
                                                                                <span>{inputSharpener}</span>
                                                                            </div>
    }

    const renderProducingArea = (): ReactNode => {
        const inputSharpenerConfig = {
            clickHandler: (newValue : string) => setInputProducingArea(newValue),
            currentValue: inputProducingArea,
            label: "producing area",
            id: 7
        }
        return editMode ? <InputFieldRegular {...inputSharpenerConfig}/> :  <div>
                                                                                {getKnifeById.producingArea ? <label>Area of produktion: </label> : ''}
                                                                                <span>{inputProducingArea}</span>
                                                                            </div>
    }

    const renderHandle = (): ReactNode => {
        const inputHandleConfig = {
            clickHandler: (newValue : string) => setInputHandle(newValue),
            currentValue: inputHandle,
            label: "handle",
            id: 8
        }
        return editMode ? <InputFieldRegular {...inputHandleConfig}/> : <div>
                                                                            {getKnifeById.handle ? <label>Handle: </label> : ''}
                                                                            <span>{inputHandle}</span>
                                                                        </div>
    }

    const renderRetailerNote = (): ReactNode => {
        const inputRetailerNoteConfig = {
            clickHandler: (newValue : string) => setInputRetailerNote(newValue),
            currentValue: inputRetailerNote,
            label: "retailer note",
            id: 9
        }
        return editMode ? <InputFieldRegular {...inputRetailerNoteConfig}/> : <div>
                                                                                <h2>Retailer notes</h2>
                                                                                <p>{inputRetailerNote}</p>
                                                                            </div>
    }

    const renderStoneNote = (): ReactNode => {
        const inputStoneNoteConfig = {
            clickHandler: (newValue : string) => setInputStoneNote(newValue),
            currentValue: inputStoneNote,
            label: "stone note",
            id: 10
        }
        return editMode ? <InputFieldRegular {...inputStoneNoteConfig}/> :  <div>
                                                                                <h2>Personal stone pairing notes</h2>
                                                                                <p>{inputStoneNote}</p>
                                                                            </div>
    }

    const renderKnifeSteelList = (data: KnifeSteel, index: number): ReactNode => {
        const inputKnifeSteelListConfig = {
            clickHandler: (newValue : string) => {
                const newArr = [...knifeSteelList]
                newArr[index].steel = newValue
                setInputKnifeSteel(newArr)
            },
            currentValue: inputKnifeSteel[index].steel,
            label: inputKnifeSteel[index].label,
            id: 10
        }
        return editMode ? <InputFieldRegular key={index} {...inputKnifeSteelListConfig}/> 
            : 
            <span key={index} className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                {data.label} : {data.steel}
            </span>
    }
    
    return (
        <section className="w-full">
     
            <ToggleButton {...buttonProps} />

            <header>
                {renderBrand()}
                
                <h1 className="font-bold text-3xl">
                    {renderName()} {renderType()} {renderCoreSteel()}
                </h1>
            </header>

            <ul>
                <li>{renderSmith()} {renderSharpener()}</li>
                <li>{renderProducingArea()}</li>
                <li>{renderHandle()}</li>
            </ul>

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

            <div>
                <h2>Steel</h2>
                {knifeSteelList.map((data, index) => (
                    renderKnifeSteelList(data, index)
                ))}
            </div>

            <div>
                <h2>Dimensions</h2>
                <SimpleTable {...tableConfig} />
            </div>

            <div>
                {renderRetailerNote()}
            </div>

            <div>
                {renderStoneNote()}
            </div>

        </section>
    )
}

