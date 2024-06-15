import React from 'react'
import Tag from './Tag'

const HeroContent = () => {
	return (
		<div className='absolute bottom-[20%] w-1/2 d:w-1/3 px-[20px] md:px-[70px]'>
			<Tag />
			<h1 className='font-lora text-hero-content-color text-2xl md:text-4xl my-6 mb-2'>
				Richird Norton photorealistic
				<br /> rendering as real photos
			</h1>
			<p className='text-hero-content-color text-sm md:text-lg'>
				Progressively incentivize cooperative systems through technically sound functionalities. The
				credibly productivate seamless data.
			</p>
		</div>
	)
}

export default HeroContent
