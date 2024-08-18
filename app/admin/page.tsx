import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'
import { createPost } from '../actions'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import PostsTable from '../components/PostsTable'

export default async function ProtectedPage() {
	const userSelectedImages = [
		{
			imageURL: '/images/fallback_travel.jpg',
			imageName: 'Default',
		},
		{
			imageURL: '/images/userSelectedImages/nature.jpg',
			imageName: 'Nature',
		},
		{
			imageURL: '/images/userSelectedImages/adventure.jpg',
			imageName: 'Adventure',
		},
		{
			imageURL: '/images/userSelectedImages/beach.jpg',
			imageName: 'Beach',
		},
		{
			imageURL: '/images/userSelectedImages/city.jpg',
			imageName: 'City',
		},
		{
			imageURL: '/images/userSelectedImages/culture.jpg',
			imageName: 'Culture',
		},
	]

	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/')
	}

	// I later moved the below createPost function to actions.ts
	//const createPost = async (formData: FormData) => {
	// 	'use server'

	// 	// Create a new post
	// 	await prisma.post.create({
	// 		data: {
	// 			title: formData.get('title') as string,
	// 			slug: formData.get('slug') as string,
	// 			subheading: formData.get('subheading') as string,
	// 			content: formData.get('content') as string,
	// 			quote: formData.get('quote') as string,
	// 			// tags is an array of strings, so we split the string by comma to get an array of tags and then trim each tag
	// 			tags: (formData.get('tags') as string)?.split(',').map((tag) => tag.trim()) || [],
	// 			image: formData.get('img') as string,
	// 			authorId: user?.id,
	// 		},
	// 	})

	// 	return redirect('/')
	// }

	// Get all posts created by the logged-in user and include the author to also get the user's name
	const posts = await prisma.post.findMany({
		include: { author: true }, //include author to access User model (where we have the user's name, which we don´t get from Supabase auth.getUser() (we only get the email from that)
		where: { author: { email: user.email } }, //only show posts created by the logged in user, user.email is from Supabase (supabase.auth.getUser() ovan)
	})

	// // Delete a post by its slug
	// const deletePost = async (slug: string) => {
	// 	'use server'
	// 	// Instead of hardcoding as in await prisma.post.delete({ where: { slug: 'paris-forever' } }),
	// 	// we will ensure the correct post is deleted (i.e., the one the user clicks on) by passing in
	// 	// the slug of the clicked post as a parameter to the deletePost function.
	// 	await prisma.post.delete({ where: { slug: slug } })

	// 	return redirect('/')
	// }

	return (
		<main className='w-screen'>
			<div className='py-6 font-bold bg-neutral-500 text-center flex justify-between'>
				<div></div>

				<div className=' flex justify-end gap-10 pr-16'>
					<div>
						{/* This is both the Logout and Login button */}
						<AuthButton />
					</div>
					<Button>
						<Link href='/'>Home</Link>
					</Button>
				</div>
			</div>

			<section className='mt-8 text-center'>
				{/* <h2>Hey, {user.email}!</h2> */}
				<h2>Hi {posts.length > 0 ? posts[0].author.name : 'there'}!</h2>
				<p>
					Create a new post using the form,{' '}
					<span className='font-bold'>or manage existing posts below</span> the form.
				</p>
			</section>

			<section className='w-[40vw] rounded-md mx-auto p-4 border border-1 border-black my-6'>
				<h1>Create New Post</h1>
				<form id='login-form' className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='title'>Title</Label>
						<Input id='title' name='title' type='text' placeholder='Post title' required />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='slug'>Slug</Label>
						<Input id='slug' name='slug' type='text' placeholder='exploring-new-york' required />
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='subheading'>Subheading</Label>
						<Input
							id='subheading'
							name='subheading'
							type='text'
							placeholder='New York is the place to be'
							required
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='content'>Content</Label>
						<textarea
							id='content'
							name='content'
							placeholder='Enter your post text here'
							required
							className='w-full h-32 p-2 border border-1 border-black'
						/>
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='quote'>Quote</Label>
						<Input
							id='quote'
							name='quote'
							type='text'
							placeholder='Add an optional quote from your post'
						/>
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='tags'>Tags</Label>
						<Input
							id='tags'
							name='tags'
							type='text'
							placeholder='Enter one or more available tags (nature, adventure, beach, city and/or culture), separeted by comma'
						/>
					</div>

					{/* <div className='grid gap-2'>
						<Label htmlFor='img'>Image</Label>
						<Input id='img' name='img' type='text' placeholder='Add an image' />
					</div> */}
					<div>
						<select id='img' name='img' className='cursor-pointer'>
							<option value='' disabled>
								Select an image
							</option>
							{userSelectedImages.map((image, i) => {
								return (
									<option key={i} value={image.imageURL}>
										{image.imageName}
									</option>
								)
							})}
						</select>
					</div>
					{/* formAction grabs the name attribute values of the <input> and <select> elements and sends them to the createPost function */}

					<Button formAction={createPost} className='w-full mt-8'>
						Create Post
					</Button>
				</form>
			</section>
			<main className='w-full flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-6'>
				<h1 className='font-semibold my-4 text-lg md:text-2xl'>Existing Posts</h1>
				<div className='border shadow-sm rounded-lg'>
					<PostsTable posts={posts} />
				</div>
			</main>
		</main>
	)
}
