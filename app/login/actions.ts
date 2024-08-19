'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/db'

export async function login(formData: FormData) {
	const supabase = createClient()

	const data = {
		name: formData.get('username') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/admin')
}

export async function signup(formData: FormData) {
	const supabase = createClient()

	// Sign up the user
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		redirect('/error')
	}

	// Create new user in db
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user || !user.email) {
		throw new Error('User email is undefined')
	}

	await prisma.user.create({
		data: {
			name: formData.get('username') as string,
			email: user?.email,
			id: user?.id,
		},
	})

	// Redirect to the admin page if the sign up was successful
	revalidatePath('/', 'layout')
	redirect('/admin')
}
