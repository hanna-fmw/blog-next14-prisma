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
			// tags is an array of strings, so we split the string by comma to get an array of tags and then trim each tag
			tags: (formData.get('tags') as string)?.split(',').map((tag) => tag.trim()) || [],
			// image below is from name="img" from the <select> in the form in admin/page.tsx,
			// where we have the userSelectedImages array of URLs to images in public/images/userSelectedImages
			image: formData.get('img') as string,
			authorId: user?.id,
		},
	})

	return redirect('/')
}

// Delete a post by its slug
export const deletePost = async (slug: string) => {
	'use server'
	// Instead of hardcoding as in await prisma.post.delete({ where: { slug: 'paris-forever' } }),
	// we will ensure the correct post is deleted (i.e., the one the user clicks on) by passing in
	// the slug of the clicked post as a parameter to the deletePost function.
	await prisma.post.delete({ where: { slug: slug } })

	return redirect('/')
}
