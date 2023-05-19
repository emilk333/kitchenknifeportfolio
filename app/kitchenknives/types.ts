import { OriginalPrice } from "../sharedTypes"


export type listOfKitchenKnives = KitchenKnife[]

export interface KitchenKnife {
  uuid : string,
  brand: string
  name: string
  img: string
  smith: string
  sharpener: string
  producingArea: string
  type: string
  steel: Steel
  dimensions: Dimensions
  handle: string
  retailerNotes: string
  usageNotes: string
  stonePairingNotes: string
  originalUrl: string
  originalPrice: OriginalPrice
}

export interface Steel {
  coreSteel: string
  construction: string
  hrc: number
}

export interface Dimensions {
  totalLength: number
  edgeLength: number
  handleToTip: number
  height: number
  thicknessAtHandle: number
  handleLength: number
  weight: number
}

