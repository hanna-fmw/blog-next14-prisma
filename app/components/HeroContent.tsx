import React from 'react'
import Tag from './Tag'

type Props = {
	postTitle: string
	subheading?: string
	tag?: string
	author?: string
	contentClassName?: string
	titleClassName?: string
	textClassName?: string
	subheadingClassName?: string
	showTag?: boolean
}
// <div className='absolute bottom-[10%] w-1/2 md:w-1/2 lg:w-1/3 px-[20px] md:px-[70px]'>
const HeroContent = ({
	postTitle,
	subheading,
	tag,
	author,
	contentClassName,
	titleClassName,
	textClassName,
	subheadingClassName,
	showTag = true,
}: Props) => {
	return (
		<div className={`absolute ${contentClassName}`}>
			{showTag && <Tag tag={tag} />}
			<h1 className={`font-lora text-hero-content-color ${titleClassName}`}>{postTitle}</h1>
			<p className={`font-lora mt-3 text-hero-content-color ${subheadingClassName}`}>
				{subheading}
			</p>
			<p className={`font-lora mt-3 text-hero-content-color ${textClassName}`}>{author}</p>
		</div>
	)
}

export default HeroContent
