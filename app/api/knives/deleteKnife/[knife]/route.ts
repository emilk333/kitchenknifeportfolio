import { supabase } from '@/app/supabase/supabase'


export async function DELETE(
	req: Request,
	{ params }: { params: { knife: string } }
) {
	const { data, error } = await supabase
		.from('kitchen_knives')
		.delete()
		.eq('uuid', params.knife)
		
	
    if (error) {
        console.error(`${error},,,, Database failed to delete from table kitchen_knives: item of uuid: ${params.knife}`)
    }
}

