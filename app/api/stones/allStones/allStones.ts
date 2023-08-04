import { NextResponse } from 'next/server'

export async function GET() {

	// const res = await fetch('https://data.mongodb-api.com/...', {
	// 		next: { revalidate: 60 }, // Revalidate every 60 seconds
	// 	})
	// const data = await res.json()
	
	//TODO: Return data from a data base query instead of hardcoded stuff
	const jsonData = JSON.stringify([
		{
			"uuid" : "78459a5c-9660-4845-87b2-c53fbe18de25",
			"brand": "Morihei",
			"mine": "Nakayama",
			"img": "https://cdn.shopify.com/s/files/1/0418/6151/3377/products/DSC02728_1296x_9a159359-4db6-4df1-ae38-03ad4b9aedf8.jpg?v=1680806998",
			"name": "Nakayama Suita Extra Large Koppa",
			"hardness": 4,
			"fineness": 4,
			"speed": 4,
			"layer": "Suita",
			"size": "164 x 90 x 43mm",
			"weight": 1641,
			"retailerNotes": "Big Nakayama Koppa, leaves a very shiny finish with good contrast. Pretty clean on the initial surface, looking at the sides you can expect some inconsistencies in the future but will be easy to chisel out.",
			"usageNotes": "",
			"originalUrl": "https://karasu-knives.com/products/aaeba-nmn002",
			"goodfor": "polishing",
			"originalPrice": {
				"value": 456,
				"currency": "eur"
			}
		},
		{
			"uuid" : "398afcc2-3e88-48ae-b51c-8c151af7b926",
			"brand": "Morihei",
			"mine": "Nakayama",
			"img": "https://cdn.shopify.com/s/files/1/0418/6151/3377/products/DSC02728_1296x_9a159359-4db6-4df1-ae38-03ad4b9aedf8.jpg?v=1680806998",
			"name": "Nakayama Suita Extra Large Koppa",
			"hardness": 4,
			"fineness": 4,
			"speed": 4,
			"layer": "Suita",
			"size": "164 x 90 x 43mm",
			"weight": 1641,
			"retailerNotes": "Big Nakayama Koppa, leaves a very shiny finish with good contrast. Pretty clean on the initial surface, looking at the sides you can expect some inconsistencies in the future but will be easy to chisel out.",
			"usageNotes": "",
			"originalUrl": "https://karasu-knives.com/products/aaeba-nmn002",
			"goodfor": "polishing",
			"originalPrice": {
				"value": 456,
				"currency": "eur"
			}
		}
	])

	return NextResponse.json(jsonData)
}