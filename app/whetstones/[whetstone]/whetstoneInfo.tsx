"use client"

import { ToggleButton } from "@/app/components/Button/ToggleButton"
import { IWhetstone, IWhetstoneEdited } from "../types"
import { ReactNode, useState } from "react"
import { InputFieldRegularNumber, InputFieldRegularText } from "@/app/components/Input/InputFieldRegular"
import { IFetchHeaderConfig } from "@/app/util/types"
import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { Endpoint } from "@/app/util/endpoints"
import Image from "next/image";
import { GenericButtonProps, IGenericButtonType } from "@/app/components/Button/types"
import { GenericButton } from "@/app/components/Button/GenericButton"
import Modal from "@/app/components/Modal/Modal"
import ConfirmModal from "@/app/components/Modal/ConfirmModal"
import { useRouter } from "next/navigation"

interface IKnifeInfoProps {
    whetstone: IWhetstone,
}

export const WhetstoneInfo = (whetstoneInfoProps: IKnifeInfoProps) => {

    const router = useRouter()
    const stone = whetstoneInfoProps.whetstone
    const [editMode, setEditMode] = useState(false)
    const [modalState, setModalState] = useState({ show: false })

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
    const [inputOriginalUrl, setInputOriginalUrl] = useState(stone.originalUrl)
    const [inputRecommendedUsage, setInputRecommendedUsage] = useState(stone.recommendedUsage)
    const [inputOriginalPrice, setInputOriginalPrice] = useState(stone.originalPrice)
    const [inputImage, setInputImage] = useState(stone.img)

    const updateStateAfterStoneEdit = (updatedStone: any) => {
        setInputBrand(updatedStone.brand)
        setInputName(updatedStone.name)
        setInputMine(updatedStone.mine)
        setInputHardness(updatedStone.hardness)
        setInputFineness(updatedStone.fineness)
        setInputSpeed(updatedStone.speed)
        setInputLayer(updatedStone.layer)
        setInputRetailerNote(updatedStone.retailerNotes)
        setInputUsageNotes(updatedStone.usageNotes)
        setInputOriginalUrl(updatedStone.originalUrl)
        setInputRecommendedUsage(updatedStone.recommendedUsage)
        setInputOriginalPrice(updatedStone.originalPrice)
        setInputImage(updatedStone.img)
    }

    const saveEditedStone = () => {
        const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }
        headerConfig.method = "POST"

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
        
        const fetchConfig = {
            endpoint: Endpoint.EDIT_STONE,
            headerConfig
        }

        genericFetch<IWhetstone>(fetchConfig).then(data => updateStateAfterStoneEdit(data))
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
        return editMode ? <InputFieldRegularText {...inputBrandConfig} /> : <span>{inputBrand}</span>
    }

    const renderName = (): ReactNode => {
        const inputNameConfig = {
            clickHandler: (newValue: string) => setInputName(newValue),
            currentValue: inputName,
            label: "name",
            id: 2
        }
        return editMode ? <InputFieldRegularText {...inputNameConfig} /> : <span>{inputName}</span>
    }

    const renderMine = (): ReactNode => {
        const inputMineConfig = {
            clickHandler: (newValue: string) => setInputMine(newValue),
            currentValue: inputMine,
            label: "mine",
            id: 3
        }
        return editMode ? <InputFieldRegularText {...inputMineConfig} /> : <span>{inputMine}</span>
    }


    const renderWeight = (): ReactNode => {
        const inputWeightConfig = {
            clickHandler: (newValue: number) => setInputWeight(newValue),
            currentValue: inputWeight,
            label: "weight",
            id: 4
        }
        return editMode ? <InputFieldRegularNumber {...inputWeightConfig} /> : <div>
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
        return editMode ? <InputFieldRegularNumber {...inputHardnessConfig} /> : <div>
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
        return editMode ? <InputFieldRegularNumber {...inputFinenessConfig} /> : <div>
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
        return editMode ? <InputFieldRegularNumber {...inputSpeedConfig} /> : <div>
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
        return editMode ? <InputFieldRegularNumber {...inputLayerConfig} /> : <div>
            <label className="text-lg font-bold text-gray-900 sm:text-xl">Layer: <span>{inputLayer}</span> </label>
        </div>
    }

    const renderRetailerNote = (): ReactNode => {
        const inputRetailerNoteConfig = {
            clickHandler: (newValue: string) => setInputRetailerNote(newValue),
            currentValue: inputRetailerNote,
            label: "retailer note",
            id: 9
        }
        return editMode ? <InputFieldRegularText {...inputRetailerNoteConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Retailer notes</h2>
            <p>{inputRetailerNote}</p>
        </div>
    }

    const renderUsageNotes = (): ReactNode => {
        const inputUsageNotesConfig = {
            clickHandler: (newValue: string) => setInputUsageNotes(newValue),
            currentValue: inputUsageNotes,
            label: "usage-notes",
            id: 10
        }
        return editMode ? <InputFieldRegularText {...inputUsageNotesConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Usage notes</h2>
            <p>{inputUsageNotes}</p>
        </div>
    }

    const renderRecommendedFor = (): ReactNode => {
        const inputRecommendedForConfig = {
            clickHandler: (newValue: string) => setInputRecommendedUsage(newValue),
            currentValue: inputRecommendedUsage,
            label: "recommended-for",
            id: 11
        }
        return editMode ? <InputFieldRegularText {...inputRecommendedForConfig} /> : <div>
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
        return editMode ? <InputFieldRegularText {...inputSizeConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Stone dimensions: <span>{inputSize}</span></h2>
        </div>
    }

    const renderOriginalPrice = (): ReactNode => {
        const inputOriginalPriceConfig = {
            clickHandler: (newValue: string) => setInputOriginalPrice(newValue),
            currentValue: inputOriginalPrice,
            label: "original price",
            id: 13
        }
        return editMode ? <InputFieldRegularText {...inputOriginalPriceConfig} /> : <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">Original price: <span>{inputOriginalPrice}</span></h2>
        </div>
    }

    const renderImage = (): ReactNode => {
        const inputImageConfig = {
            clickHandler: (newValue: string) => setInputImage(newValue),
            currentValue: inputImage,
            label: "image url",
            id: 14
        }
        return editMode ? <InputFieldRegularText {...inputImageConfig} /> : <div>
            <Image
                className="w-full object-cover"
                src={stone.img}
                alt="alt"
                fill
            />
        </div>
    }

    const headerConfig: IFetchHeaderConfig = { ...defaultHeaderConfig }

    const toggleModal = (state: boolean) => {
        setModalState({
            show: state
        })
    }

    const modalConfig = {
        modalState: modalState,
        toggleModal
    }

    const buttonConfigOpenModal: GenericButtonProps = {
        clickHandler: async () => toggleModal(true),
        value: "Delete",
        buttonType: IGenericButtonType.REJECT    
    }

    const buttonConfigModalCancel: GenericButtonProps = {
        clickHandler: async () => toggleModal(false),
        value: "Cancel",
        buttonType: IGenericButtonType.NEUTRAL
    }

    const buttonConfigModalDelete: GenericButtonProps = {
        clickHandler: async function() {
            headerConfig.method = "DELETE"
            const fetchConfigToDeleteStone = {
                endpoint: Endpoint.DELETE_STONE,
                queryParam: stone.uuid,
                headerConfig: headerConfig as RequestInit,
            }

            let url = `${process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : ''}${fetchConfigToDeleteStone.endpoint}`

            console.log(fetchConfigToDeleteStone)
            // TODO reason we are using node fetch here, is because I can't be bothered to make the genericFetch both return void and Promise<T>
            return fetch(`${url}/${fetchConfigToDeleteStone.queryParam}`, fetchConfigToDeleteStone.headerConfig).then(res => {
                if (res.ok) {
                    toggleModal(false)
                    router.push("/whetstones")
                }
            })
        },
        value: "Delete",
        buttonType: IGenericButtonType.REJECT
    }

    return (
        <section className="w-[calc(100%+4px)] -mx-[2px] md:mx-0 mb:w-full">

            <div className="flex justify-end h-16">
                <ToggleButton {...buttonProps} />
                <div className="z-30 flex items-center">
                    <GenericButton {...buttonConfigOpenModal} />
                    <Modal modalConfig={modalConfig}>
                        <ConfirmModal
                            text={`Confirm deletion of ${inputBrand}`}
                            action1Button={buttonConfigModalCancel}
                            action2Button={buttonConfigModalDelete}
                        />
                    </Modal>
                </div>
            </div>

            <div className="w-full max-h-24 relative h-24 border-2 border-slate-400 border-b-0">
                {renderImage()}
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

