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
		where: { slug: slug },
		include: { author: true },
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
							src={post?.image ? post.image : 'no image'}
							alt='Post Image'
							width={300}
							height={200}
						/>

						<div>{post?.content}</div>
						<div>Author: {post?.author.name}</div>
					</Link>
				</div>
			</section>
		</main>
	)
}
