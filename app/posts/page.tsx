import Image from 'next/image'
import HeroContent from '../components/HeroContent'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'
import Footer from '../components/Footer'
import prisma from '@/lib/db'
import Link from 'next/link'

type Post = {
	id: string
	title: string
	slug: string
	subheading: string
	content: string
	tags: string[]
	published: boolean
	date: Date
	author: User
	authorId: string
	image: string
}

type User = {
	id: string
	email: string
	name: string
	posts: Post[]
}

type Props = {
	searchParams: { tagFilter: string }
}

//If the array is static and won't change for different instances of PostsPage, you
//can place it outside the function. This way, the array is only created once and
//not on every render of PostsPage.
const availableTags = ['nature', 'adventure']

const PostsPage = async ({ searchParams: { tagFilter } }: Props) => {
	console.log('these are searchParams', tagFilter)
	const posts = await prisma.post.findMany({
		include: { author: true }, //include author to access User model
	})

	const postCount = await prisma.post.count()

	console.log('tagFilter:', tagFilter)
	console.log(
		'tags of all posts:',
		posts.map((post) => post.tags)
	)
	console.log(
		'type of tags:',
		posts.map((post) => typeof post.tags)
	)

	const filteredPosts = tagFilter ? posts.filter((post) => post.tags.includes(tagFilter)) : posts

	return (
		<main>
			<section className='w-screen min-w-full h-[80vh] bg-hero-bg bg-center object-cover relative'>
				<Navbar />
				<HeroContent />
			</section>

			<section className='w-screen px-[20px] md:px-[70px]'>
				<h1 className='mt-12 md:mt-20 font-lora'>Posts ({postCount})</h1>
				<div>
					<Link
						href='/posts'
						className='font-lora text-sm font-bold mr-2 hover:underline underline-offset-2'>
						All
					</Link>
					{availableTags.map((tag, i) => (
						<Link
							key={i}
							href={`/posts?tagFilter=${tag}`}
							className='font-lora text-sm font-bold mr-2 hover:underline underline-offset-2'>
							{tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
						</Link>
					))}
					{/* <Link href='/posts?tagFilter=usa'>USA</Link>
					<Link href='/posts?tagFilter=nature'>Nature</Link>
					<Link href='/posts?tagFilter=adventure'>Adventure</Link>
					<Link href='/posts?tagFilter=costa&rica'>Costa Rica</Link> */}
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					{filteredPosts.map((post) => (
						<PostCard key={post.id} post={post} />
						// <Link key={post.id} href={`/posts/${post.slug}`}>
						// 	<h3>{post.title}</h3>
						// 	<div>
						// 		<span className='font-medium'>Tags: </span>
						// 		{post.tags.map((tag, i) => {
						// 			return (
						// 				<>
						// 					<span key={i}>{tag}&nbsp;</span>
						// 				</>
						// 			)
						// 		})}
						// 	</div>
						// 	<div>{post.subheading}</div>
						// 	<Image src={post.image} alt='Post Image' width={300} height={200} />
						// 	<div>{`${post.date.getFullYear()}-${(post.date.getMonth() + 1).toString().padStart(2, '0')}-${post.date.getDate()}`}</div>
						// 	<div>Author: {post.author.name}</div>
						// </Link>
					))}
					{/* <PostCard
						img={redRock}
						postTitle='USA'
						description='Mesa Arch in Canyonlands National Park, located in Utah, USA'
					/>
					<PostCard
						img={bridgeAndBeach}
						postTitle='Canada'
						description='Lions Gate Bridge in Vancouver, Canada'
					/>
					<PostCard
						img={touchingWater}
						postTitle='Costa Rica'
						description='Arenal Volcano, Costa Rica'
					/>
					<PostCard img={trees} postTitle='Sweden' description='Trees and fog, Sweden' /> */}
				</div>
			</section>
			<Footer />
		</main>
	)
}

export default PostsPage
