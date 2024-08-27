import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

/**
 * Represents the structure of a blog post.
 */
type Post = {
	post: {
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
}

/**
 * Represents a user, typically the author of a post.
 */
type User = {
	id: string
	email: string
	name: string
}

/**
 * PostCard Component
 * 
 * Renders a card displaying summary information for a blog post.
 * 
 * @param {Post} props - The props object containing the post data.
 * @returns {JSX.Element} A link wrapping the post card content.
 */
const PostCard = ({ post }: Post) => {
	return (
		<Link key={post.id} href={`/posts/${post.slug}`}>
			<section className='cursor-pointer'>
				<div className='mt-8'>
					<div className='relative'>
						<div className='overflow-hidden absolute top-4 right-2'>
							{post.tags.map((tag: string, i) => {
								return <Tag key={i} tag={tag} />
							})}
						</div>
						<Image
							src={post.image ? post.image : '/images/fallback_travel.jpg'}
							alt='Post Image'
							width={250}
							height={200}
							className='object-cover w-[45vw] h-[30vh] md:w-[35vw] md:h-[35vh] lg:w-[25vw] lg:h-[35vh] rounded-md'
						/>
					</div>
					<div className='font-lora text-date-color text-xs mt-3'>{`${post.date.getFullYear()}.${(post.date.getMonth() + 1).toString().padStart(2, '0')}.${post.date.getDate()}`}</div>
					<h2 className='font-lora text-xl font-semibold mt-6'>{post.title}</h2>
					<p className='text-xs md:text-sm text-gray-500'>{post.subheading}</p>
				</div>
			</section>
		</Link>
	)
}

export default PostCard
