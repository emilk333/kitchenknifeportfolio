import { IDimensions, IKitchenKnife, IKnifeInfoEdited, ISteel } from '@/app/kitchenknives/types'
import { supabase } from '@/app/supabase/supabase'
import { NextResponse } from 'next/server'
import { mapSingleKnife } from '../../services/aggregateKnives'


//TODO Clean up - Move these into their own files/folders. Call it "middleware" or something stupid 

export const updateKitchenKnife = async (kitchenKnife: IKnifeInfoEdited, uuidOfKnifeToUpdate: string) => {
	const { data, error } = await supabase
		.from('kitchen_knives')
		.update({
			brand : kitchenKnife.brand,
			name : kitchenKnife.name,
			type: kitchenKnife.type,
			smith: kitchenKnife.smith,
			sharpener: kitchenKnife.sharpener,
			producingArea: kitchenKnife.producingArea,
			handle: kitchenKnife.handle,
			retailerNotes: kitchenKnife.retailerNote,
			stonePairingNotes: kitchenKnife.stoneNote
		})
		.eq('uuid', uuidOfKnifeToUpdate)
		.select()
		.single()

	if (data) return data

	if (error) {
		console.error("Database update failed: kitchen_knives")
		return {}
	}
}

export const updateKnifeSteel = async (knifesteel: ISteel, uuidOfKnifeToUpdate: string) => {
	const { data, error } = await supabase
		.from('knife_steel')
		.update({
			construction: knifesteel.construction,
			coreSteel: knifesteel.coreSteel,
			cladding: knifesteel.cladding,
			hrc: knifesteel.hrc
		})
		.eq('knife_uuid', uuidOfKnifeToUpdate)
		.select()
		.single()

	if (data) return data

	if (error) {
		console.error("Database update failed: knife_steel")
		return {}
	}
}

export const updateKnifeDimensions = async (knifeDimensions: IDimensions, uuidOfKnifeToUpdate: string) => {
	const { data, error } = await supabase
		.from('knife_dimensions')
		.update({
			totalLength: knifeDimensions.totalLength,
			edgeLength: knifeDimensions.edgeLength,
			handleToTip: knifeDimensions.handleToTip,
			height: knifeDimensions.height,
			thicknessAtHandle: knifeDimensions.thicknessAtHandle,
			handleLength: knifeDimensions.handleLength,
			weight: knifeDimensions.weight
		})
		.eq('knife_uuid', uuidOfKnifeToUpdate)
		.select()
		.single()

	if (data) return data

	if (error) {
		console.error("Database update failed: knife_dimensions")
		return {}
	}
}


export async function POST(req: Request) {
	const requestData = await req.json()
	const requestHeaderReferer = req.headers.get('referer')

	if (requestHeaderReferer) {
		const uuidOfKnifeFromPageUrl = requestHeaderReferer.split('/').at(-1)

		if (uuidOfKnifeFromPageUrl) {
			
			const knifeModelMap = {
				brand: requestData.brand,
				name: requestData.name,
				type: requestData.type,
				smith: requestData.smith,
				sharpener: requestData.sharpener,
				producingArea: requestData.producingArea,
				handle: requestData.handle,
				retailerNote: requestData.retailerNote,
				stoneNote: requestData.stoneNote
			}
		
			//TODO Dont cast - find a better solution by implementing interfaces from database. Supabase should generate schema. 
			const kitchen_knife = await updateKitchenKnife(knifeModelMap, uuidOfKnifeFromPageUrl) as IKitchenKnife
			const knife_steel = await updateKnifeSteel(requestData.steel, uuidOfKnifeFromPageUrl) as ISteel
			const knife_dimensions = await updateKnifeDimensions(requestData.dimensions, uuidOfKnifeFromPageUrl) as IDimensions
			const singleKnife = mapSingleKnife(kitchen_knife, knife_dimensions, knife_steel)

			return NextResponse.json(JSON.stringify(singleKnife))
		}
	}
} 