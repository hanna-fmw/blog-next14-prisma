import prisma from '@/lib/db'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import HeroContent from '@/app/components/HeroContent'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params: { slug } }: Props) {
	const post = await prisma.post.findUnique({
		where: { slug: slug },
		include: { author: true },
	})

	let image = post?.image ? post.image : '/bridge-and-beach.jpg'

	return (
		<main>
			<section
				style={{
					backgroundImage: `url('${image}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
				className='w-screen min-w-full h-[70vh] relative'>
				<Navbar />
				<HeroContent
					postTitle={post?.title ?? 'Travel around the World'}
					subheading={post?.subheading}
				/>
			</section>

			<div className='flex flex-col'>
				<h3>{post?.title}</h3>
				<div>
					<span className='font-medium'>Tags: </span>
					{post?.tags.map((tag, i) => {
						return (
							<>
								<span key={i}>{tag}&nbsp;</span>
							</>
						)
					})}
				</div>
				<div>{post?.subheading}</div>
				<div>{post?.content}</div>
				<div>Author: {post?.author.name}</div>
				<Link href='/'>Back to Home</Link>
			</div>
		</main>
	)
}
