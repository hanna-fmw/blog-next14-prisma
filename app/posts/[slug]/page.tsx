import Image from 'next/image'
import prisma from '@/lib/db'
import Link from 'next/link'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params: { slug } }: Props) {
	const post = await prisma.post.findUnique({
		where: { slug: slug }, //där slug (post.slug) är lika med den slug som skickas in (params.slug)
		include: { author: true }, //include author to access User model
	})

	return (
		<main>
			<section className='w-screen px-[20px] md:px-[70px]'>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					<Link href='/'>
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
						<Image
							src={post?.image ? post.image : 'no image'} //måste ha en fallback image/sträng av något slag, null funkar inte
							alt='Post Image'
							width={300}
							height={200}
						/>

						{/* <Image src={post?.image || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Post Image' width={300} height={200} /> */}
						<div>{post?.content}</div>
						<div>Author: {post?.author.name}</div>
					</Link>
				</div>
			</section>
		</main>
	)
}
