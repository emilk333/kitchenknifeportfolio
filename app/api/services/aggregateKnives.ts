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

export const getAllKnivesCompleteData = async () => {
	let completeDatasetOfAllKnives: any[] = []

	const allKnives = await getAllKnives()
	const knife_dimensions = await getKnifeDimensions()
	const knife_steel = await getKnifeSteel()

	if (allKnives && knife_dimensions && knife_steel) {
		completeDatasetOfAllKnives = allKnives.map(knife => {
			let knifeId = knife.uuid

			const matchingDimension = knife_dimensions.find(dimension => dimension.knife_uuid === knifeId)
			const matchingSteel = knife_steel.find(steel => steel.knife_uuid === knifeId)

			return {
				...knife,
				dimensions: {
					edgeLength: matchingDimension.edgeLength,
					handleLength: matchingDimension.handleLength,
					handleToTip: matchingDimension.handleToTip,
					height: matchingDimension.height,
					thicknessAtHandle: matchingDimension.thicknessAtHandle,
					totalLength: matchingDimension.totalLength,
					weight: matchingDimension.weight
				},
				steel: {
					construction: matchingSteel.construction,
					coreSteel: matchingSteel.coreSteel,
					cladding: matchingSteel.cladding,
					hrc: matchingSteel.hrc
				}
			}
		})
	}

	return completeDatasetOfAllKnives
}
