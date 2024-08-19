import prisma from '@/lib/db'
import React from 'react'

type Props = {
	tagFilter: string
}

const FilterByTag = async ({ tagFilter }: Props) => {
	const [isFiltered, setIsFiltered] = React.useState(false)
	const postsFilteredByTag: any = await prisma.post.findMany({
		include: { author: true }, 
		where: { tags: { hasSome: ['usa'] } },
	})
	return (
		<>
			<button onClick={() => setIsFiltered(!isFiltered)}>Usa</button>
			<div>{postsFilteredByTag ? postsFilteredByTag : null}</div>
		</>
	)
}

export default FilterByTag
