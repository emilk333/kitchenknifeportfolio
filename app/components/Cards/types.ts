import { KitchenKnife } from "@/app/kitchenknives/types";
import { ItemTypes } from "@/app/sharedTypes";
import { Whetstone } from "@/app/whetstones/types";


export interface CardProps {
    cardData : KitchenKnife | Whetstone,
    type : ItemTypes
}