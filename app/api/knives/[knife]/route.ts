import { NextRequest, NextResponse } from 'next/server'
import { getAllKnivesCompleteData } from '../../services/aggregateKnives'

export async function GET(
	req: NextRequest,
	{ params }: { params: { knife: string } }
) {
	const knifeId = params.knife 
	const data = await getAllKnivesCompleteData()
	const knifeToReturn = JSON.stringify(data.find(knife => knife.uuid === knifeId))

	return NextResponse.json(knifeToReturn)
}