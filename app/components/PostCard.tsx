import React from 'react'
import Image from 'next/image'

type Props = {
	img: string
}

const PostCard = ({ img }: Props) => {
	return (
		<section>
			<div>
				<div>
					<Image
						src={img}
						alt='Post Image'
						width={300}
						height={200}
						className='rounded-[5px] max-w-1/2 md:max-w-[20vw]'
					/>
				</div>
				<h2 className='text-xl font-semibold'>Post Title</h2>
				<p className='text-gray-500'>Post Description</p>
			</div>
		</section>
	)
}

export default PostCard
