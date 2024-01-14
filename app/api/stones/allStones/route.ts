import { NextResponse } from 'next/server'
import { supabase } from "@/app/supabase/supabase"

const getAllWhetstones = async () => {
	const { data: whetstones, error } = await supabase.from('whetstones')
		.select()

	if (whetstones) return whetstones

	if (error) {
		console.error("Database fetch failed: whetstones")
		return []
	}
}

export async function GET() {
	const jsonData = JSON.stringify(await getAllWhetstones())
	console.log(`Data succesfully fetched for 'whetstones': ${jsonData}`)
	return NextResponse.json(jsonData)
}