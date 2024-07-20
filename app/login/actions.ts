'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/db'

export async function login(formData: FormData) {
	const supabase = createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs
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
	redirect('/protected')
}

export async function signup(formData: FormData) {
	const supabase = createClient()

	// Step 1 (authentication): Sign up the user
	// Pass the email and password (as data) to the Supabase auth API (auth.signUp) (this is Authentication)
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		redirect('/error')
	}

	// Step 2 (database): Create a new user in the database
	// Create a new user in the database with a) the user's email from Step 1 (authentication) and b) the name from the sign up form
	// We need supabase.auth.getUser() to get the user's email from the authentication step (we get data from the auth API and we
	// desctructure the user object from the data object, i.e. data: { user })

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user || !user.email) {
		// Handle the case where user or user.email is undefined
		// For example, throw an error or redirect the user
		throw new Error('User email is undefined')
	}

	await prisma.user.create({
		data: {
			name: formData.get('username') as string,
			email: user?.email, // Use the email of the registered/logged-in user
			id: user?.id, //Testar att använda auth-id:t som skapas i Supabase i Step 1 (auth) som id i databasen
		},
	})

	// Step 3 (redirect): Redirect the user to the protected page if the sign up was successful
	revalidatePath('/', 'layout')
	redirect('/protected')
}
