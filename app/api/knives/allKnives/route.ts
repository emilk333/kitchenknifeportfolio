
import { NextRequest, NextResponse } from 'next/server'
import { getAllKnivesCompleteData } from '../../services/aggregateKnives'


export async function GET() {
	const jsonData = JSON.stringify(await getAllKnivesCompleteData())
	return NextResponse.json(jsonData)
}