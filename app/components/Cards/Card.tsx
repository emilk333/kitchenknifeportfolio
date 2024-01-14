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
            <article className="flex items-center h-16 group pr-6">
                <div className="relative h-16 w-16 flex items-center justify-center">
                    <Image 
                        className="absolute h-16 w-16 object-cover group-hover:w-20"
                        src={cardData.img}
                        alt="alt"
                        width={64}
                        height={64}
                    />
                </div>
                
                <h3 className="ml-4 text-lg font-bold text-gray-900 sm:text-xl">
                    {cardData.brand}
                </h3>
                <p className="ml-4 text text-gray-900 sm:text-sm">
                    {cardData.name}
                </p>

                <p className="max-w-sm text-gray-700">
                    {cardData.usageNotes}
                </p>
            </article>
        </Link>
    )
}