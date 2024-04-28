import { IDimensions, IKitchenKnife, ISteel } from "@/app/kitchenknives/types"
import { createClient } from "@/app/supabase/server"


const getAllKnives = async () => {
	const { data: kitchen_knives, error } = await createClient().from('kitchen_knives').select()

	if (kitchen_knives) return kitchen_knives

	if (error) {
		console.error("Database fetch failed: kitchen_knives")
		return []
	}
}

const getKnifeDimensions = async () => {
	const { data: knife_dimensions, error } = await createClient().from('knife_dimensions').select()

	if (knife_dimensions) return knife_dimensions

	if (error) {
		console.error("Database fetch failed: knife_dimensions")
		return []
	}
}

const getKnifeSteel = async () => {
	const { data: knife_steel, error } = await createClient().from('knife_steel').select()

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
			edgeLength: dimension?.edgeLength ?? 0,
			handleLength: dimension?.handleLength ?? 0,
			handleToTip: dimension?.handleToTip ?? 0,
			height: dimension?.height ?? 0,
			thicknessAtHandle: dimension?.thicknessAtHandle ?? 0,
			totalLength: dimension?.totalLength ?? 0,
			weight: dimension?.weight ?? 0
		},
		steel: {
			construction: steel?.construction ?? "",
			coreSteel: steel?.coreSteel ?? "",
			cladding: steel?.cladding ?? "",
			hrc: steel?.hrc ?? 0
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
			const matchingSteel = knife_steel.find((steel:any) => steel.knife_uuid === knifeId)
			return mapSingleKnife(knife, matchingDimension, matchingSteel)
		})
	}

	return completeDatasetOfAllKnives
}
