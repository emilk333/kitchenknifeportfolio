'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../supabase/server'

export async function logout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
  
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout') // If a user logouts/in with another use with other and that user has other access-rights, we need to "flush" stale/cached components
  redirect('/')
}
