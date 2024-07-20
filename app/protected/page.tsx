import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'
// import Button from '../components/Button'
import { Button } from '../components/ui/button'

import { Input } from '../components/ui/input'
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from '../components/ui/table'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'

export default async function ProtectedPage() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/')
	}

	const createPost = async (formData: FormData) => {
		'use server'

		///KOLLAR BARA OM KAN LÄGGA DETTA I SIGNUPBUTTON
		// // Check if the user already exists
		// const existingUser = await prisma.user.findUnique({
		// 	where: {
		// 		email: user.email, // Use the email of the logged-in user
		// 	},
		// })

		// let userId

		// if (!existingUser) {
		// 	// If the user does not exist, create a new user
		// 	const newUser = await prisma.user.create({
		// 		data: {
		// 			name: 'Prickig',
		// 			email: user.email, // Use the email of the logged-in user
		// 		},
		// 	})
		// 	userId = newUser.id
		// } else {
		// 	// If the user exists, use the existing user's ID
		// 	userId = existingUser.id
		// }

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
				image: formData.get('img') as string,
				authorId: user?.id,
			},
		})

		// Create the post and associate it with the user (below is an example with hard-coded data for a new post)
		// await prisma.post.create({
		// 	data: {
		// 		title: 'En brandgul katt i Järvsö',
		// 		slug: 'a-brandgul-cat-in-jarvso',
		// 		subheading: 'Brandgul i Vaxholm.',
		// 		content: 'Brandgul är en brandgul katt som bor i Vaxholm och älskar att jaga möss.',
		// 		quote: 'Ett citat från Brandgul.',
		// 		tags: ['nature', 'culture'],
		// 		image: '/images/exploring-dubai-a-fusion-of-modernity-and-tradition/hero.jpg',
		// 		// Associate the post with the user using the user ID
		// 		authorId: user?.id, // Assuming the Post model has an `authorId` field to link to the User model
		// 	},
		// })
		return redirect('/')
	}

	// Get all posts created by the logged-in user and include the author to also get the user's name
	const posts = await prisma.post.findMany({
		include: { author: true }, //include author to access User model (where we have the user's name, which we don´t get from Supabase auth.getUser() (we only get the email from that)
		where: { author: { email: user.email } }, //only show posts created by the logged in user, user.email is from Supabase (supabase.auth.getUser() ovan)
	})

	const deletePost = async () => {
		'use server'
		await prisma.post.delete({ where: { slug: 'paris-forever' } })

		// return redirect('/')
	}

	// Function to create an excerpt from the content
	function trimContent(content: string, maxLength: number) {
		// If the content is shorter than the maxLength, return it as is.
		if (content.length <= maxLength) return content

		// Find the last space before maxLength to avoid cutting in the middle of a word.
		let trimmedContent = content.slice(0, maxLength)
		const lastSpaceIndex = trimmedContent.lastIndexOf(' ')

		// If there's a space, trim up to that space. Otherwise, return the content as is.
		if (lastSpaceIndex > 0) {
			trimmedContent = trimmedContent.slice(0, lastSpaceIndex)
		}

		return trimmedContent + '...'
	}

	return (
		<main>
			<section>
				{/* <div className='flex-1 w-full flex'> */}

				<div className='w-full'>
					<div className='py-6 font-bold text-white bg-neutral-500 text-center flex justify-end gap-10 pr-16'>
						<div>
							{/* <h2>Hey, {user.email}!</h2> */}
							<h2>Hi {posts.length > 0 ? posts[0].author.name : 'there'}!</h2>
						</div>
						<div>
							{/* This is both the Logout and Login button */}
							<AuthButton />
						</div>
						<Link href='/'>Home</Link>
					</div>
				</div>

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
							<Input
								id='content'
								name='content'
								type='text'
								placeholder='Write your post content here'
								required
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
								placeholder='Choose one or more available tags, separeted by comma'
							/>
						</div>

						<div className='grid gap-2'>
							<Label htmlFor='img'>Image</Label>
							<Input id='img' name='img' type='text' placeholder='Add an image' />
						</div>

						<Button formAction={createPost} className='w-full mt-8'>
							Create Post Form - Create Button
						</Button>
					</form>
				</section>
				{/* <section className='w-full mx-auto mt-5'>
					<form action={createPost}>
						<Button>Create</Button>
					</form>
					<form action={deletePost}>
						<Button>Delete Post</Button>
					</form>
				</section> */}
			</section>
			<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
				<div className='flex items-center'>
					<h1 className='font-semibold text-lg md:text-2xl'>Existing Posts</h1>
					<Button className='ml-auto' size='sm'>
						Delete All
					</Button>
				</div>
				<div className='border shadow-sm rounded-lg'>
					<Table className='px-10'>
						<TableHeader>
							<TableRow>
								<TableHead>Title</TableHead>
								<TableHead>Subheading</TableHead>
								<TableHead>Content</TableHead>
								<TableHead>Author</TableHead>
								<TableHead className='w-[100px]'>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{posts.map((post) => (
								<TableRow key={post.id}>
									<TableCell className='font-medium'>{post.title}</TableCell>
									<TableCell>{post.subheading}</TableCell>
									{/* <TableCell>{post.content.slice(0, 100)}</TableCell> */}
									<TableCell>{trimContent(post.content, 100)}</TableCell>
									<TableCell>{post.author.name}</TableCell>
									<TableCell className='flex gap-2 w-[100px]'>
										{/* <Button>
											Delete
											<span className='sr-only'>Delete</span>
										</Button> */}
										<form action={deletePost}>
											<Button>Delete Post</Button>
										</form>
										<Button>
											<Link href={`http://localhost:3000/posts/${post.slug}`}>View</Link>
										</Button>
									</TableCell>
								</TableRow>
							))}
							{/* <TableRow>
								<TableCell className='font-medium'>Introduction to Vercel</TableCell>
								<TableCell>John Doe</TableCell>
								<TableCell>2023-08-16</TableCell>
								<TableCell className='flex gap-2 w-[100px]'>
									<Button size='icon' className='w-8 h-8'>
										Edit
										<span className='sr-only'>Edit</span>
									</Button>
									<Button size='icon' className='w-8 h-8'>
										Delete
										<span className='sr-only'>Delete</span>
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-medium'>Deploying Next.js Applications</TableCell>
								<TableCell>Jane Smith</TableCell>
								<TableCell>2023-09-20</TableCell>
								<TableCell className='flex gap-2 w-[100px]'>
									<Button size='icon' className='w-8 h-8'>
										Edit
										<span className='sr-only'>Edit</span>
									</Button>
									<Button size='icon' className='w-8 h-8'>
										Delete
										<span className='sr-only'>Delete</span>
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-medium'>The Benefits of Jamstack</TableCell>
								<TableCell>Alex Johnson</TableCell>
								<TableCell>2023-10-05</TableCell>
								<TableCell className='flex gap-2 w-[100px]'>
									<Button size='icon' className='w-8 h-8'>
										Edit
										<span className='sr-only'>Edit</span>
									</Button>
									<Button size='icon' className='w-8 h-8'>
										Delete
										<span className='sr-only'>Delete</span>
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-medium'>Building Static Sites with SvelteKit</TableCell>
								<TableCell>Emily Davis</TableCell>
								<TableCell>2023-11-12</TableCell>
								<TableCell className='flex gap-2 w-[100px]'>
									<Button size='icon' className='w-8 h-8'>
										Edit
										<span className='sr-only'>Edit</span>
									</Button>
									<Button size='icon' className='w-8 h-8'>
										Delete
										<span className='sr-only'>Delete</span>
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-medium'>Optimizing Images with Image</TableCell>
								<TableCell>Mark Wilson</TableCell>
								<TableCell>2023-12-18</TableCell>
								<TableCell className='flex gap-2 w-[100px]'>
									<Button size='icon' className='w-8 h-8'>
										Edit
										<span className='sr-only'>Edit</span>
									</Button>
									<Button size='icon' className='w-8 h-8'>
										Delete
										<span className='sr-only'>Delete</span>
									</Button>
								</TableCell>
							</TableRow> */}
						</TableBody>
					</Table>
				</div>
			</main>
		</main>
	)
}
