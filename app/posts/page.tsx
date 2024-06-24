import HeroContent from '../components/HeroContent'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'
import prisma from '@/lib/db'
import Link from 'next/link'

type Props = {
	searchParams: { tagFilter: string }
}

const availableTags = ['nature', 'adventure', 'beach', 'city', 'culture']

const PostsPage = async ({ searchParams: { tagFilter } }: Props) => {
	const posts = await prisma.post.findMany({
		include: { author: true }, //include author to access User model
	})

	const postCount = await prisma.post.count()

	const filteredPosts = tagFilter ? posts.filter((post) => post.tags.includes(tagFilter)) : posts

	return (
		<main>
			<section className='w-screen min-w-full h-[65vh] md:h-[70vh] overflow-hidden bg-hero-bg bg-center object-cover relative'>
				<Navbar />
				<HeroContent
					postTitle='Exploring the Unseen Corners of the World.'
					subheading='A voyage through hidden gems and cultural marvels, where every destination tells a story.'
					contentClassName='bottom-[10%] w-1/2 md:w-1/2 lg:w-1/3 px-[20px] md:px-[70px]'
					titleClassName='text-2xl md:text-4xl my-6 mb-2'
					textClassName='font-bold text-sm md:text-base'
					subheadingClassName='text-sm md:text-base'
				/>
			</section>

			<section className='w-screen my-16 px-[20px] md:px-[70px]'>
				<h1 className='text-xl md:text-2xl mt-12 md:mt-18 font-lora'>Posts ({postCount})</h1>
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
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{filteredPosts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			</section>
		</main>
	)
}

export default PostsPage
