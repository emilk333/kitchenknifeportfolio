'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()
  
  // type-casting here for convenience
  // in practice, you should validate your inputs 
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  console.log("succesful login", data)

  revalidatePath('/', 'layout') // If a user logouts/in with another use with other and that user has other access-rights, we need to "flush" stale/cached components
  redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  
    const { error } = await supabase.auth.signUp(data)
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/') // If a user logouts/in with another use with other and that user has other access-rights, we need to "flush" stale/cached components
    redirect('/')
  }