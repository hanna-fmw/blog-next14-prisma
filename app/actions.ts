'use server'

import prisma from '@/lib/db'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export const createPost = async (formData: FormData) => {
	'use server'
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/')
	}

	// Create a new post
	await prisma.post.create({
		data: {
			title: formData.get('title') as string,
			slug: formData.get('slug') as string,
			subheading: formData.get('subheading') as string,
			content: formData.get('content') as string,
			quote: formData.get('quote') as string,
			tags: (formData.get('tags') as string)?.split(',').map((tag) => tag.trim()) || [],
			image: formData.get('img') as string,
			authorId: user?.id,
		},
	})

	return redirect('/')
}

// Delete a post by its slug
export const deletePost = async (slug: string) => {
	'use server'
	await prisma.post.delete({ where: { slug: slug } })

	return redirect('/')
}
