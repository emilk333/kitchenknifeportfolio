import { NextRequest, NextResponse } from 'next/server'
import { getAllKnivesCompleteData } from '../../services/aggregateKnives'

export async function GET(
	req: NextRequest,
	{ params }: { params: { knife: string } }
) {
	const knifeId = params.knife 
	const data = await getAllKnivesCompleteData()

	// This is retarded. Usage db to get what u need. See whetstone route for correct implementation.
	const knifeToReturn = JSON.stringify(data.find(knife => knife.uuid === knifeId)) 

	return NextResponse.json(knifeToReturn)
}