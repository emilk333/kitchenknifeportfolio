import { IDimensions, IKnifeInfoEdited, ISteel } from "@/app/kitchenknives/types";
import { createClient } from "@/app/supabase/server";
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';


export const createKitchenKnife = async (kitchenKnife: IKnifeInfoEdited, uuid: string) => {
	const { error } = await createClient()
		.from('kitchen_knives')
		.insert({
			uuid,
			brand : kitchenKnife.brand,
			name : kitchenKnife.name,
			type: kitchenKnife.type,
			smith: kitchenKnife.smith,
			sharpener: kitchenKnife.sharpener,
			producingArea: kitchenKnife.producingArea,
			handle: kitchenKnife.handle,
			retailerNotes: kitchenKnife.retailerNote,
			stonePairingNotes: kitchenKnife.stoneNote,
			img: kitchenKnife.img
		})

    if (error) {
        console.error("Database create failed: kitchen_knives")
    }
}

export const createKnifeSteel = async (knifesteel: ISteel, uuid: string) => {
	const { error } = await createClient()
		.from('knife_steel')
		.insert({
			knife_uuid: uuid,
			construction: knifesteel.construction,
			coreSteel: knifesteel.coreSteel,
			cladding: knifesteel.cladding,
			hrc: knifesteel.hrc
		})

	if (error) {
		console.error("Database create failed: knife_steel")
	}
}

export const createKnifeDimensions = async (knifeDimensions: IDimensions, uuid: string) => {
	const { error } = await createClient()
		.from('knife_dimensions')
		.insert({
			knife_uuid: uuid,
			totalLength: knifeDimensions.totalLength,
			edgeLength: knifeDimensions.edgeLength,
			handleToTip: knifeDimensions.handleToTip,
			height: knifeDimensions.height,
			thicknessAtHandle: knifeDimensions.thicknessAtHandle,
			handleLength: knifeDimensions.handleLength,
			weight: knifeDimensions.weight
		})

	if (error) {
		console.error("Database create failed: knife_dimensions")
	}
}

export async function POST(req: Request) {
    const requestData = await req.json()

    const knifeModelMap = {
        brand: requestData.brand,
        name: requestData.name,
        type: requestData.type,
        smith: requestData.smith,
        sharpener: requestData.sharpener,
        producingArea: requestData.producingArea,
        handle: requestData.handle,
        retailerNote: requestData.retailerNote,
        stoneNote: requestData.stoneNote,
		img: requestData.img
    }

	const generatedUuid = uuidv4()

    //TODO Dont cast - find a better solution by implementing interfaces from database. Supabase should generate schema. 
    await createKitchenKnife(knifeModelMap, generatedUuid)
	await createKnifeSteel(requestData.steel, generatedUuid)
	await createKnifeDimensions(requestData.dimensions, generatedUuid)
	
	redirect('/kitchenknives')
} 