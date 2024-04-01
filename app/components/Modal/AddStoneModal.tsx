"use client"

import { ReactNode, useState } from "react"
import { InputFieldRegularNumber, InputFieldRegularText } from "../Input/InputFieldRegular"
import { IKnifeInfoEdited } from "@/app/kitchenknives/types"
import { GenericButton } from "../Button/GenericButton"
import { GenericButtonProps, IGenericButtonType } from "../Button/types"
import { defaultHeaderConfig } from "@/app/util/fetch"
import { Endpoint } from "@/app/util/endpoints"
import { IFetchHeaderConfig } from "@/app/util/types"
import { useRouter } from "next/navigation"
import { IWhetstone, IWhetstoneEdited } from "@/app/whetstones/types"


export default function AddStoneModal({modalConfig}: any) {
    const router = useRouter()

    //TODO Fix this useState shitshow and drop into a better structure 
    const [inputBrand, setInputBrand] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputMine, setInputMine] = useState("")
    const [inputHardness, setInputHardness] = useState(0)
    const [inputFineness, setInputFineness] = useState(0)
    const [inputSpeed, setInputSpeed] = useState(0)
    const [inputLayer, setInputLayer] = useState("")
    const [inputSize, setInputSize] = useState("")
    const [inputWeight, setInputWeight] = useState(0)
    const [inputRetailerNote, setInputRetailerNote] = useState("")
    const [inputUsageNotes, setInputUsageNotes] = useState("")
    const [inputOriginalUrl, setInputOriginalUrl] = useState("")
    const [inputRecommendedUsage, setInputRecommendedUsage] = useState("")
    const [inputOriginalPrice, setInputOriginalPrice] = useState("")
    const [inputImage, setInputImage] = useState("")

    const addNewStone = async () => {
        const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }
        const postModel: IWhetstoneEdited = {
            brand: inputBrand,
            mine: inputMine,
            name: inputName,
            hardness: inputHardness,
            fineness: inputFineness,
            speed: inputSpeed,
            layer: inputLayer,
            size: inputSize,
            weight: inputWeight,
            retailerNotes: inputRetailerNote,
            usageNotes: inputUsageNotes,
            originalUrl: inputOriginalUrl,
            recommendedUsage: inputRecommendedUsage,
            originalPrice: inputOriginalPrice,
            img: inputImage
        }

        headerConfig.body = JSON.stringify(postModel)
        headerConfig.method = "POST"
        headerConfig.cache = "no-store"

        const fetchConfig = {
            endpoint: Endpoint.ADD_NEW_STONE,
            headerConfig: headerConfig as RequestInit
        }

        // TODO fix duplicate code.
        let url = `${process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : ''}${fetchConfig.endpoint}`

        // TODO reason we are using node fetch here, is because I can't be bothered to make the genericFetch both return void and Promise<T>
        return fetch(url, fetchConfig.headerConfig).then(res => {
            if (res.ok) {
                modalConfig.toggleModal(false)
                router.refresh()
            }
        })
    }

    const buttonConfigAddStone: GenericButtonProps = {
        clickHandler: addNewStone,
        value: "+ Add",
        buttonType: IGenericButtonType.ACCEPT
    }

    const buttonConfigCloseModal: GenericButtonProps = {
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

    const renderMine = (): ReactNode => {
        const inputMineConfig = {
            clickHandler: (newValue: string) => setInputMine(newValue),
            currentValue: inputMine,
            label: "mine",
            id: 3
        }
        return <InputFieldRegularText {...inputMineConfig} />
    }


    const renderWeight = (): ReactNode => {
        const inputWeightConfig = {
            clickHandler: (newValue: number) => setInputWeight(newValue),
            currentValue: inputWeight,
            label: "weight",
            id: 4
        }
        return <InputFieldRegularNumber {...inputWeightConfig} />
    }

    const renderHardness = (): ReactNode => {
        const inputHardnessConfig = {
            clickHandler: (newValue: number) => setInputHardness(newValue),
            currentValue: inputHardness,
            label: "hardness",
            id: 5
        }
        return <InputFieldRegularNumber {...inputHardnessConfig} />
    }

    const renderFineness = (): ReactNode => {
        const inputFinenessConfig = {
            clickHandler: (newValue: number) => setInputFineness(newValue),
            currentValue: inputFineness,
            label: "fineness",
            id: 6
        }
        return <InputFieldRegularNumber {...inputFinenessConfig} />
    }

    const renderSpeed = (): ReactNode => {
        const inputSpeedConfig = {
            clickHandler: (newValue: number) => setInputSpeed(newValue),
            currentValue: inputSpeed,
            label: "speed",
            id: 7
        }
        return <InputFieldRegularNumber {...inputSpeedConfig} />
    }

    const renderLayer = (): ReactNode => {
        const inputLayerConfig = {
            clickHandler: (newValue: string) => setInputLayer(newValue),
            currentValue: inputLayer,
            label: "layer",
            id: 8
        }
        return <InputFieldRegularText {...inputLayerConfig} /> 
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

    const renderUsageNotes = (): ReactNode => {
        const inputUsageNotesConfig = {
            clickHandler: (newValue: string) => setInputUsageNotes(newValue),
            currentValue: inputUsageNotes,
            label: "usage-notes",
            id: 10
        }
        return <InputFieldRegularText {...inputUsageNotesConfig} />
    }

    const renderRecommendedFor = (): ReactNode => {
        const inputRecommendedForConfig = {
            clickHandler: (newValue: string) => setInputRecommendedUsage(newValue),
            currentValue: inputRecommendedUsage,
            label: "recommended-for",
            id: 11
        }
        return <InputFieldRegularText {...inputRecommendedForConfig} />
    }

    const renderSize = (): ReactNode => {
        const inputSizeConfig = {
            clickHandler: (newValue: string) => setInputSize(newValue),
            currentValue: inputSize,
            label: "size",
            id: 12
        }
        return <InputFieldRegularText {...inputSizeConfig} />
    }

    const renderOriginalPrice = (): ReactNode => {
        const inputOriginalPriceConfig = {
            clickHandler: (newValue: string) => setInputOriginalPrice(newValue),
            currentValue: inputOriginalPrice,
            label: "original price",
            id: 12
        }
        return <InputFieldRegularText {...inputOriginalPriceConfig} />
    }

    const renderImage = (): ReactNode => {
        const inputImageConfig = {
            clickHandler: (newValue: string) => setInputImage(newValue),
            currentValue: inputImage,
            label: "image",
            id: 13
        }
        return <InputFieldRegularText {...inputImageConfig} />
    }

    return (
        <div>
            <p className="mb-6 text-xl font-bold">Add stone</p>
            <div className="flex">
                <div className="grow mr-2">
                    {renderBrand()}
                    {renderName()}
                    {renderMine()}
                    {renderWeight()}
                    {renderHardness()}
                    {renderFineness()}
                    {renderSpeed()}
                    {renderLayer()}
                    {renderRetailerNote()}
                    {renderUsageNotes()}
                    {renderRecommendedFor()}
                    {renderSize()}
                    {renderOriginalPrice()}
                    {renderImage()}
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <GenericButton {...buttonConfigAddStone} />
                <GenericButton {...buttonConfigCloseModal} />
            </div>
        </div>
    )
}