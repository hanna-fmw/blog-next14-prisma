import Image from 'next/image'
import HeroContent from '../components/HeroContent'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'
import redRock from '../public/red-rock.png'
import bridgeAndBeach from '../public/bridge-and-beach.png'
import touchingWater from '../public/touching-water.png'
import trees from '../public/fog-trees.png'
import Footer from '../components/Footer'
import prisma from '@/lib/db'
import Link from 'next/link'

export default async function PostsPage() {
	const posts = await prisma.post.findMany({
		include: { author: true }, //inlude author to access User model
	})

	const postCount = await prisma.post.count()

	return (
		<main>
			<section className='w-screen min-w-full h-[80vh] bg-hero-bg bg-center object-cover relative'>
				<Navbar />
				<HeroContent />
			</section>

			<section className='w-screen px-[20px] md:px-[70px]'>
				<h1 className='mt-12 md:mt-20'>Posts ({postCount})</h1>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					{posts.map((post) => (
						<Link key={post.id} href={`/post/${post.title}`}>
							<h3>{post.title}</h3>
							<div>
								<span className='font-medium'>Tags: </span>
								{post.tags.map((tag, i) => {
									return (
										<>
											<span key={i}>{tag}&nbsp;</span>
										</>
									)
								})}
							</div>
							<div>{post.content}</div>
							<Image src={post.image} alt='Post Image' width={300} height={200} />
							<div>Author: {post.author.name}</div>
						</Link>
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
