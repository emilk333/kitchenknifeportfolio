import { OriginalPrice } from "../sharedTypes"


export interface Whetstone {
  uuid : string,
  brand: string
  mine: string
  img: string
  name: string
  hardness: number
  fineness: number
  speed: number
  layer: string
  size: string
  weight: number
  retailerNotes: string
  usageNotes: string
  originalUrl: string
  goodfor: string
  originalPrice: OriginalPrice
}
