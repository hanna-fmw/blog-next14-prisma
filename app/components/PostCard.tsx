import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

type Post = {
	post: {
		id: string
		slug: string
		image: string
		title: string
		subheading: string
		content: string
		tags: string[]
		date: Date
		author: User
	}
}
type User = {
	id: string
	email: string
	name: string
	posts: Post[]
}

const PostCard = ({ post }: Post) => {
	return (
		<Link key={post.id} href={`/posts/${post.slug}`}>
			<section className='cursor-pointer'>
				<div className='mt-8'>
					<div className='relative'>
						<div className='absolute top-3 right-3'>
							{post.tags.map((tag: string, i) => {
								return <Tag key={i} tag={tag} />
							})}
						</div>
						<Image
							src={post.image}
							alt='Post Image'
							width={250}
							height={200}
							className='object-cover w-[300px] h-[250px] rounded-md'
						/>
					</div>
					<div className='font-lora text-date-color text-xs mt-3'>{`${post.date.getFullYear()}.${(post.date.getMonth() + 1).toString().padStart(2, '0')}.${post.date.getDate()}`}</div>
					<h2 className='font-lora text-xl font-semibold mt-6'>{post.title}</h2>
					<p className='text-gray-500'>{post.subheading}</p>
				</div>
			</section>
		</Link>
	)
}

export default PostCard
