import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  // Consider how data is returned back to frontend
  // a) Either chain a get call after post 
  // b) or simply make the post return a full data sheet
  
  console.log("EditKnife route has bee hit")
  // This route should edit database 
  const res = await request.json()
  return NextResponse.json({ res })
} 