import React from 'react'

type Props = {
	params: {
		title: string
	}
}

const PostPage = ({ params: { title } }: Props) => {
	return (
		<main>
			<div>PostPage</div>
			<div>Post Title: {title}</div>
		</main>
	)
}

export default PostPage
