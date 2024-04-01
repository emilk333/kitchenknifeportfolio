
import { supabase } from "@/app/supabase/supabase";
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';

export async function POST(req: Request) {
	const requestData = await req.json()
	const generatedUuid = uuidv4()

	//TODO Dont cast - find a better solution by implementing interfaces from database. Supabase should generate schema. 
	const { error } = await supabase
		.from('whetstones')
		.insert({
			uuid: generatedUuid,
			brand: requestData.brand,
			mine: requestData.mine,
			name: requestData.name,
			hardness: requestData.hardness,
			fineness: requestData.fineness,
			speed: requestData.speed,
			layer: requestData.layer,
			size: requestData.size,
			weight: requestData.weight,
			retailer_notes: requestData.retailerNotes,
			usage_notes: requestData.usageNotes,
			recommended_for: requestData.recommendedUsage,
			original_price: requestData.originalPrice,
			img: requestData.img
		})

	if (error) {
		console.error(`${error.message} Database create failed: whetstone`)
	}

	redirect('/whetstones')
}

