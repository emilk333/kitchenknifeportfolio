import { supabase } from '@/app/supabase/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function DELETE(
	req: Request,
	{ params }: { params: { stone: string } }
) {
	const { error } = await supabase
	.from('whetstones')
	.delete()
	.eq('uuid', params.stone)

	if (error) {
		console.log("Error trying to delete stone", error.details, error.message)
	}
	
	revalidatePath('/whetstones') // Update cached stones
	redirect('/whetstones') 
}

