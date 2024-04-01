
export interface IWhetstone {
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
  recommendedUsage: string
  originalPrice: string
}

export interface IWhetstoneEdited {
  brand: string
  mine: string
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
  recommendedUsage: string
  originalPrice: string,
  img: string
}
