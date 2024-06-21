import React from 'react'

type Props = {
	tag: string
}

const Tag = ({ tag }: Props) => {
	return (
		<span
			className='text-tag-color text-xs md:text-[10px] rounded-[8px] px-[10px] py-[5px] font-semibold uppercase tracking-[1px] mx-1 my-3'
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
			{tag}
		</span>
	)
}

export default Tag
