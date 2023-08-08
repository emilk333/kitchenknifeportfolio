import { OriginalPrice } from "../sharedTypes"


export interface IKitchenKnife {
	uuid: string,
	brand: string
	name: string
	img: string
	smith: string
	sharpener: string
	producingArea: string
	type: string
	steel: ISteel
	dimensions: IDimensions
	handle: string
	retailerNotes: string
	usageNotes: string
	stonePairingNotes: string
	originalUrl: string
	originalPrice: OriginalPrice
}

export interface ISteel {
	coreSteel: string
	construction: string
	hrc: number
	cladding: string
}

export interface IDimensions {
	totalLength: number
	edgeLength: number
	handleToTip: number
	height: number
	thicknessAtHandle: number
	handleLength: number
	weight: number
}

export interface IKnifeSteelMapped {
	value: string | number,
	label: string
}

export interface IDimensionMapped {
	value: number,
	label: string,
	measurement: string
}

export interface IKitchenKnifeDetailsPageProps {
	params: {
		kitchenknife: string
	}
}


export interface IKnifeInfoEdited {
	brand: string,
	name: string,
	type: string,
	smith: string,
	steel?: ISteel,
	dimensions?: IDimensions,
	sharpener: string,
	producingArea: string,
	handle: string,
	retailerNote: string,
	stoneNote: string
}