import React from 'react'
import Tag from './Tag'

type Props = {
	postTitle: string
	subheading?: string
	tag?: string
	author?: string
}

const HeroContent = ({ postTitle, subheading, tag, author }: Props) => {
	return (
		<div className='absolute bottom-[10%] w-1/2 md:w-1/2 lg:w-1/3 px-[20px] md:px-[70px]'>
			<Tag tag={tag} />
			<h1 className='font-lora text-hero-content-color text-2xl md:text-4xl my-6 mb-2'>
				{postTitle}
			</h1>
			<p className='font-lora mt-3 text-hero-content-color text-sm md:text-base'>{subheading}</p>
			<p className='font-lora mt-3 text-hero-content-color font-bold text-sm md:text-base'>
				By {author}
			</p>
		</div>
	)
}

export default HeroContent
