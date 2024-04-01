import { IKitchenKnife } from "@/app/kitchenknives/types";
import { ItemTypes } from "@/app/sharedTypes";
import { IWhetstone } from "@/app/whetstones/types";


export interface CardProps {
    cardData : IKitchenKnife | IWhetstone,
    type : ItemTypes
}