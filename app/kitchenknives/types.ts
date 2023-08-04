import { OriginalPrice } from "../sharedTypes"


export interface KitchenKnife {
	uuid: string,
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
	cladding: string
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

export type KnifeSteelList = KnifeSteel[]

export type KnifeSteel = {
	steel: string | number,
	label: string
}

export type DimensionList = Dimension[]

export type Dimension = {
	value: number,
	label: string,
	measurement: string
}

export interface KitchenKnifeDetailsPageProps {
	params: {
		kitchenknife: string
	}
}

export interface IKnifeInfoEdited {
	brand: string,
	name: string,
	type: string,
	steel: KnifeSteel,
	dimensions: DimensionList
	smith: string,
	sharpener: string,
	producingArea: string,
	handle: string,
	retailerNote: string,
	stoneNote: string
}