import { supabase } from '@/app/supabase/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const requestData = await req.json()
	const requestHeaderReferer = req.headers.get('referer')

	if (requestHeaderReferer) {
		const uuidOfStoneFromPageUrl = requestHeaderReferer.split('/').at(-1) //This is so stupid
		
		// Use real mapped models - this is dog shit trying to match what the database keys are by hand
		if (uuidOfStoneFromPageUrl) {
			const { data, error } = await supabase
				.from('whetstones')
				.update({
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
				.eq('uuid', uuidOfStoneFromPageUrl)
				.select()
				.single()

				const mappedData = { // More stupid mapping to match keys
					brand: data.brand, 
					mine: data.mine,
					name: data.name,
					hardness: data.hardness,
					fineness: data.fineness,
					speed: data.speed,
					layer: data.layer,
					size: data.size,
					weight: data.weight,
					retailerNotes: data.retailer_notes,
					usageNotes: data.usage_notes,
					recommendedUsage: data.recommended_for,
					originalPrice: data.original_price,
					img: data.img
				}
				
				if (error) {
					console.error("Database update failed: whetstones")
				} else {
					return NextResponse.json(JSON.stringify(mappedData))
				}
		}
	}
} 