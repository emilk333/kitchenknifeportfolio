import { createClient } from "@/app/supabase/server"
import { NextRequest, NextResponse } from "next/server"


const getSingleStone = async (stoneId: string) => {
	const { data: whetstones, error } = await createClient()
		.from('whetstones')
		.select()
		.eq('uuid', stoneId)
		.single()

	if (whetstones) return whetstones

	if (error) {
		console.error("Database fetch failed: whetstones")
		return []
	}
}

export async function GET(
	req: NextRequest,
	{ params }: { params: { stone: string } }
) {
	const stoneId = params.stone 
	const stoneToReturn = await getSingleStone(stoneId)

	const mappedData = { // More stupid mapping to match keys
		uuid: stoneToReturn.uuid,
		brand: stoneToReturn.brand, 
		mine: stoneToReturn.mine,
		name: stoneToReturn.name,
		hardness: stoneToReturn.hardness,
		fineness: stoneToReturn.fineness,
		speed: stoneToReturn.speed,
		layer: stoneToReturn.layer,
		size: stoneToReturn.size,
		weight: stoneToReturn.weight,
		retailerNotes: stoneToReturn.retailer_notes,
		usageNotes: stoneToReturn.usage_notes,
		recommendedUsage: stoneToReturn.recommended_for,
		originalPrice: stoneToReturn.original_price,
		img: stoneToReturn.img
	}

	return NextResponse.json(JSON.stringify(mappedData))
}