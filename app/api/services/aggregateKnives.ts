import { IDimensions, IKitchenKnife, ISteel } from "@/app/kitchenknives/types"
import { supabase } from "@/app/supabase/supabase"


const getAllKnives = async () => {
	const { data: kitchen_knives, error } = await supabase.from('kitchen_knives').select()

	if (kitchen_knives) return kitchen_knives

	if (error) {
		console.error("Database fetch failed: kitchen_knives")
		return []
	}
}

const getKnifeDimensions = async () => {
	const { data: knife_dimensions, error } = await supabase.from('knife_dimensions').select()

	if (knife_dimensions) return knife_dimensions

	if (error) {
		console.error("Database fetch failed: knife_dimensions")
		return []
	}
}

const getKnifeSteel = async () => {
	const { data: knife_steel, error } = await supabase.from('knife_steel').select()

	if (knife_steel) return knife_steel

	if (error) {
		console.error("Database fetch failed: knife_steel")
		return []
	}
}

export const mapSingleKnife = (knife: IKitchenKnife, dimension: IDimensions, steel: ISteel) => {
	return {
		...knife,
		dimensions: {
			edgeLength: dimension.edgeLength,
			handleLength: dimension.handleLength,
			handleToTip: dimension.handleToTip,
			height: dimension.height,
			thicknessAtHandle: dimension.thicknessAtHandle,
			totalLength: dimension.totalLength,
			weight: dimension.weight
		},
		steel: {
			construction: steel.construction,
			coreSteel: steel.coreSteel,
			cladding: steel.cladding,
			hrc: steel.hrc
		}
	}
}


export const getAllKnivesCompleteData = async () => {

	//TODO This is completely brainless - this logic should not exist as one should get what we need directly from the database
	// More so, add types. Why else use TS?????

	let completeDatasetOfAllKnives: any[] = []

	const allKnives = await getAllKnives()
	const knife_dimensions = await getKnifeDimensions()
	const knife_steel = await getKnifeSteel()

	if (allKnives && knife_dimensions && knife_steel) {
		completeDatasetOfAllKnives = allKnives.map(knife => {
			let knifeId = knife.uuid

			const matchingDimension = knife_dimensions.find(dimension => dimension.knife_uuid === knifeId)
			const matchingSteel = knife_steel.find(steel => steel.knife_uuid === knifeId)

			return mapSingleKnife(knife, matchingDimension, matchingSteel)
		})
	}

	return completeDatasetOfAllKnives
}
