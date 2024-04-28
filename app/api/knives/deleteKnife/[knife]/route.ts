import { createClient } from '@/app/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const deleteKnifeDimensionEntry = async (params: { knife: string }) => {
	const { error } = await createClient()
		.from('knife_dimensions')
		.delete()
		.eq('knife_uuid', params.knife)

	if (error) {
		console.log(error.details, error.message)
	}
}

const deleteKnifeSteelEntry = async (params: { knife: string }) => {
	const { error } = await createClient()
	.from('knife_steel')
	.delete()
	.eq('knife_uuid', params.knife)

	
	if (error) {
		console.log(error.details, error.message)
	}
}

const deleteKnife = async (params: { knife: string }) => {
	const { error } = await createClient()
		.from('kitchen_knives')
		.delete()
		.eq('uuid', params.knife)
	
	if (error) {
		console.log(error.details, error.message)
	}
}


export async function DELETE(
	req: Request,
	{ params }: { params: { knife: string } }
) {
	const knifeDimensions = deleteKnifeDimensionEntry(params)
	const knifeSteel = deleteKnifeSteelEntry(params)

	await Promise.all([knifeDimensions, knifeSteel]).then(() => {
		deleteKnife(params)
	})
	
	revalidatePath('/kitchenknives') // Update cached knives
	redirect('/kitchenknives') 
}

