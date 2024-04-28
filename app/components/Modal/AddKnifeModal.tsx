"use client"

import { ReactNode, useState } from "react"
import { InputFieldRegularText } from "../Input/InputFieldRegular"
import { IKnifeInfoEdited } from "@/app/kitchenknives/types"
import { GenericClientButton } from "../Button/GenericButton"
import { GenericClientButtonProps, IGenericButtonType } from "../Button/types"
import { defaultHeaderConfig } from "@/app/util/fetch"
import { Endpoint } from "@/app/util/endpoints"
import { IFetchHeaderConfig } from "@/app/util/types"
import { useRouter } from "next/navigation"


export default function AddKnifeModal({modalConfig}: any) {
    const router = useRouter()

    //TODO Fix this useState shitshow and drop into a better structure 
    const [inputBrand, setInputBrand] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputType, setInputType] = useState("")
    const [inputCoresteel, setInputCoresteel] = useState("")
    const [inputSmith, setInputSmith] = useState("")
    const [inputSharpener, setInputSharpener] = useState("")
    const [inputProducingArea, setInputProducingArea] = useState("")
    const [inputHandle, setInputHandle] = useState("")
    const [inputRetailerNote, setInputRetailerNote] = useState("")
    const [inputStoneNote, setInputStoneNote] = useState("")
    const [inputSteelConstruction, setInputSteelConstruction] = useState("")
    const [inputSteelCoreSteel, setInputSteelCoreSteel] = useState("")
    const [inputSteelCladding, setInputSteelCladding] = useState("")
    const [inputSteelHrc, setInputSteelHrc] = useState(0)
    const [inputEdgeLength, setInputEdgeLength] = useState(0)
    const [inputHandleLength, setInputHandleLength] = useState(0)
    const [inputHandleToTipLength, setInputHandleToTipLength] = useState(0)
    const [inputHeight, setInputHeight] = useState(0)
    const [inputThicknessAtHandle, setInputThicknessAtHandle] = useState(0)
    const [inputTotalLength, setInputTotalLength] = useState(0)
    const [inputWeight, setInputWeight] = useState(0)
    const [inputImage, setInputImage] = useState("")

    const addNewKnife = async () => {
        const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }
        const postModel: IKnifeInfoEdited = {
            brand: inputBrand,
            name: inputName,
            type: inputType,
            steel: {
                construction: inputSteelConstruction,
                coreSteel: inputSteelCoreSteel,
                cladding: inputSteelCladding,
                hrc: inputSteelHrc,
            },
            dimensions: {
                edgeLength: inputEdgeLength,
                handleLength: inputHandleLength,
                handleToTip: inputHandleToTipLength,
                height: inputHeight,
                thicknessAtHandle: inputThicknessAtHandle,
                totalLength: inputTotalLength,
                weight: inputWeight,
            },
            smith: inputSmith,
            sharpener: inputSharpener,
            producingArea: inputProducingArea,
            handle: inputHandle,
            retailerNote: inputRetailerNote,
            stoneNote: inputStoneNote,
            img: inputImage
        }

        headerConfig.body = JSON.stringify(postModel)
        headerConfig.method = "POST"
        headerConfig.cache = "no-store"

        const fetchConfig = {
            endpoint: Endpoint.ADD_NEW_KNIFE,
            headerConfig: headerConfig as RequestInit
        }

        // TODO fix duplicate code.
        let url = `${process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : ''}${fetchConfig.endpoint}`

        // TODO Maybe do some loading??? 
        // TODO reason we are using node fetch here, is because I can't be bothered to make the genericFetch both return void and Promise<T>
        return fetch(url, fetchConfig.headerConfig).then(res => {
            if (res.ok) {
                modalConfig.toggleModal(false)
                router.refresh()
            }
        })
    }

    const buttonConfigAddKnife: GenericClientButtonProps = {
        clickHandler: addNewKnife,
        value: "+ Add",
        buttonType: IGenericButtonType.ACCEPT
    }

    const buttonConfigCloseModal: GenericClientButtonProps = {
        clickHandler:  async () => modalConfig.toggleModal(false),
        value: "Close",
        buttonType: IGenericButtonType.NEUTRAL
    }


    const renderBrand = (): ReactNode => {
        const inputBrandConfig = {
            clickHandler: (newValue: string) => setInputBrand(newValue),
            currentValue: inputBrand,
            label: "brand",
            id: 1
        }
        return <InputFieldRegularText {...inputBrandConfig} />
    }

    const renderName = (): ReactNode => {
        const inputNameConfig = {
            clickHandler: (newValue: string) => setInputName(newValue),
            currentValue: inputName,
            label: "name",
            id: 2
        }
        return <InputFieldRegularText {...inputNameConfig} />
    }

    const renderType = (): ReactNode => {
        const inputTypeConfig = {
            clickHandler: (newValue: string) => setInputType(newValue),
            currentValue: inputType,
            label: "type",
            id: 3
        }
        return <InputFieldRegularText {...inputTypeConfig} />
    }

    const renderCoreSteel = (): ReactNode => {
        const inputCoresteelConfig = {
            clickHandler: (newValue: string) => setInputCoresteel(newValue),
            currentValue: inputCoresteel,
            label: "coresteel",
            id: 4
        }
        return <InputFieldRegularText {...inputCoresteelConfig} />
    }

    const renderSmith = (): ReactNode => {
        const inputSmithConfig = {
            clickHandler: (newValue: string) => setInputSmith(newValue),
            currentValue: inputSmith,
            label: "smith",
            id: 5
        }
        return <InputFieldRegularText {...inputSmithConfig} />
    }

    const renderSharpener = (): ReactNode => {
        const inputSharpenerConfig = {
            clickHandler: (newValue: string) => setInputSharpener(newValue),
            currentValue: inputSharpener,
            label: "sharpener",
            id: 6
        }
        return <InputFieldRegularText {...inputSharpenerConfig} />
    }

    const renderProducingArea = (): ReactNode => {
        const inputSharpenerConfig = {
            clickHandler: (newValue: string) => setInputProducingArea(newValue),
            currentValue: inputProducingArea,
            label: "producing area",
            id: 7
        }
        return <InputFieldRegularText {...inputSharpenerConfig} />
    }

    const renderHandle = (): ReactNode => {
        const inputHandleConfig = {
            clickHandler: (newValue: string) => setInputHandle(newValue),
            currentValue: inputHandle,
            label: "handle",
            id: 8
        }
        return <InputFieldRegularText {...inputHandleConfig} />
    }

    const renderRetailerNote = (): ReactNode => {
        const inputRetailerNoteConfig = {
            clickHandler: (newValue: string) => setInputRetailerNote(newValue),
            currentValue: inputRetailerNote,
            label: "retailer note",
            id: 9
        }
        return <InputFieldRegularText {...inputRetailerNoteConfig} />
    }

    const renderStoneNote = (): ReactNode => {
        const inputStoneNoteConfig = {
            clickHandler: (newValue: string) => setInputStoneNote(newValue),
            currentValue: inputStoneNote,
            label: "stone note",
            id: 10
        }
        return <InputFieldRegularText {...inputStoneNoteConfig} />
    }

    const renderSteelConstruction = (): ReactNode => {
        const inputSteelConstructionConfig = {
            clickHandler: (newValue: string) => setInputSteelConstruction(newValue),
            currentValue: inputSteelConstruction,
            label: "Knife construction",
            id: 11
        }
        return <InputFieldRegularText {...inputSteelConstructionConfig} />
    }

    const renderSteelCoreSteel = (): ReactNode => {
        const inputSteelCoreSteelConfig = {
            clickHandler: (newValue: string) => setInputSteelCoreSteel(newValue),
            currentValue: inputSteelCoreSteel,
            label: "Knife construction",
            id: 12
        }
        return <InputFieldRegularText {...inputSteelCoreSteelConfig} />
    }

    const renderSteelCladding = (): ReactNode => {
        const inputSteelCladdingConfig = {
            clickHandler: (newValue: string) => setInputSteelCladding(newValue),
            currentValue: inputSteelCladding,
            label: "Knife cladding",
            id: 13
        }
        return <InputFieldRegularText {...inputSteelCladdingConfig} />
    }

    const renderSteelHrc = (): ReactNode => {
        const inputSteelHrcConfig = {
            clickHandler: (newValue: number) => setInputSteelHrc(newValue),
            currentValue: inputSteelHrc,
            label: "Knife hardness (HRC)",
            id: 14
        }
        return <InputFieldRegularText {...inputSteelHrcConfig} />
    }

    const renderEdgeLength = (): ReactNode => {
        const inputEdgeLengthConfig = {
            clickHandler: (newValue: number) => setInputEdgeLength(newValue),
            currentValue: inputEdgeLength,
            label: "Edge length",
            id: 15
        }
        return <InputFieldRegularText {...inputEdgeLengthConfig} />
    }

    const renderHandleLength = (): ReactNode => {
        const inputHandleLengthConfig = {
            clickHandler: (newValue: number) => setInputHandleLength(newValue),
            currentValue: inputHandleLength,
            label: "Handle length",
            id: 16
        }
        return <InputFieldRegularText {...inputHandleLengthConfig} />
    }

    const renderHandleToTip = (): ReactNode => {
        const inputHandleToTipConfig = {
            clickHandler: (newValue: number) => setInputHandleToTipLength(newValue),
            currentValue: inputHandleToTipLength,
            label: "Handle to tip length",
            id: 17
        }
        return <InputFieldRegularText {...inputHandleToTipConfig} />
    }

    const renderHeight = (): ReactNode => {
        const inputHeightConfig = {
            clickHandler: (newValue: number) => setInputHeight(newValue),
            currentValue: inputHeight,
            label: "Height",
            id: 18
        }
        return <InputFieldRegularText {...inputHeightConfig} />
    }

    const renderThicknessAtHandle = (): ReactNode => {
        const inputThicknessAtHandleConfig = {
            clickHandler: (newValue: number) => setInputThicknessAtHandle(newValue),
            currentValue: inputThicknessAtHandle,
            label: "Thickness at handle",
            id: 19
        }
        return <InputFieldRegularText {...inputThicknessAtHandleConfig} />
    }

    const renderTotalLength = (): ReactNode => {
        const inputTotalLengthConfig = {
            clickHandler: (newValue: number) => setInputTotalLength(newValue),
            currentValue: inputTotalLength,
            label: "Total length",
            id: 20
        }
        return <InputFieldRegularText {...inputTotalLengthConfig} />
    }

    const renderWeight = (): ReactNode => {
        const inputWeightConfig = {
            clickHandler: (newValue: number) => setInputWeight(newValue),
            currentValue: inputWeight,
            label: "Total length",
            id: 21
        }
        return <InputFieldRegularText {...inputWeightConfig} />
    }

    const renderImage = (): ReactNode => {
        const inputImageConfig = {
            clickHandler: (newValue: string) => setInputImage(newValue),
            currentValue: inputImage,
            label: "image",
            id: 22
        }
        return <InputFieldRegularText {...inputImageConfig} />
    }

    return (
        <div>
            <p className="mb-6 text-xl font-bold">Add knife</p>
            <div className="flex">
                <div className="grow mr-2">
                    {renderBrand()}
                    {renderName()}
                    {renderType()}
                    {renderCoreSteel()}
                    {renderSmith()}
                    {renderSharpener()}
                    {renderProducingArea()}
                    {renderHandle()}
                    {renderRetailerNote()}
                    {renderStoneNote()}
                    {renderImage()}
                </div>
                <div className="grow ml-2">
                    {renderSteelConstruction()}
                    {renderSteelCoreSteel()}
                    {renderSteelCladding()}
                    {renderSteelHrc()}
                    {renderEdgeLength()}
                    {renderHandleLength()}
                    {renderHandleToTip()}
                    {renderHeight()}
                    {renderThicknessAtHandle()}
                    {renderTotalLength()}
                    {renderWeight()}
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <GenericClientButton {...buttonConfigAddKnife} />
                <GenericClientButton {...buttonConfigCloseModal} />
            </div>
        </div>
    )
}