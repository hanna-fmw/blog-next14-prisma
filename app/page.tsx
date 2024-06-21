import React from 'react'
import PostsPage from './posts/page'

type Props = {
	searchParams: { tagFilter: string }
}

const Home = ({ searchParams }: Props) => {
	return (
		<>
			<PostsPage searchParams={searchParams} />
		</>
	)
}

export default Home
