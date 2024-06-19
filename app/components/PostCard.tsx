import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	img: string
	title: string
	description: string
}

const PostCard = ({ img, title, description }: Props) => {
	return (
		<Link href={`/${title}`}>
			<section className='cursor-pointer'>
				<div className='mt-12'>
					<div>
						<Image
							src={img}
							alt='Post Image'
							width={300}
							height={200}
							className='rounded-[5px] max-w-1/2 md:max-w-[20vw]'
						/>
					</div>
					<h2 className='text-xl font-semibold mt-6'>{title}</h2>
					<p className='text-gray-500'>{description}</p>
				</div>
			</section>
		</Link>
	)
}

export default PostCard
