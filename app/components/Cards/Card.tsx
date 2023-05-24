import Link from "next/link";
import Image from "next/image";
import { CardProps } from "./types";
import { ItemTypes } from "@/app/sharedTypes";


export default function Card(props: CardProps) {

    const { cardData, type } = props
    
    const resolveTypeForPath = (type: ItemTypes) => {
        switch (type) {
            case ItemTypes.KitchenKnife:
              return "kitchenknives"

              case ItemTypes.WhetStone:
                return "whetstones"
            
            default:
              console.error(`NO MATCH FOR ${type}`);
          }          
    }

    return (
        <Link href={`${resolveTypeForPath(type)}/${cardData.uuid}`}>
            <article>
                <Image 
                    className="h-64 w-full object-cover sm:h-80 lg:h-96" 
                    src={cardData.img}
                    alt="alt"
                    width={400}
                    height={400}
                />
                
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    {cardData.brand}
                </h3>
                <p className="text text-gray-900 sm:text-sm">
                    {cardData.name}
                </p>

                <p className="mt-2 max-w-sm text-gray-700">
                    {cardData.usageNotes}
                </p>
            </article>
        </Link>
    )
}