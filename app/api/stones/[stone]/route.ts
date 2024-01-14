import { supabase } from "@/app/supabase/supabase"
import { NextRequest, NextResponse } from "next/server"


const getSingleStone = async (stoneId: string) => {
	const { data: whetstones, error } = await supabase
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
	const stoneToReturn = JSON.stringify(await getSingleStone(stoneId))
	return NextResponse.json(stoneToReturn)
}