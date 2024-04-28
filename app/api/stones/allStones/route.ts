import { NextResponse } from 'next/server'
import { createClient } from "@/app/supabase/server"

const getAllWhetstones = async () => {
	const { data: whetstones, error } = await createClient().from('whetstones')
		.select()

	if (whetstones) return whetstones

	if (error) {
		console.error("Database fetch failed: whetstones")
		return []
	}
}

export async function GET() {
	const jsonData = JSON.stringify(await getAllWhetstones())
	return NextResponse.json(jsonData)
}