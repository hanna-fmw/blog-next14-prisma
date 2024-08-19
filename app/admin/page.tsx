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

	const posts = await prisma.post.findMany({
		include: { author: true },
		where: { author: { email: user.email } },
	})

	return (
		<main className='w-screen'>
			<div className='py-6 font-bold bg-neutral-500 text-center flex justify-between'>
				<div></div>

				<div className=' flex justify-end gap-10 pr-16'>
					<div>
						<AuthButton />
					</div>
					<Button>
						<Link href='/'>Home</Link>
					</Button>
				</div>
			</div>

			<section className='mt-8 text-center'>
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
