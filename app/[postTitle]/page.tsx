import React from 'react'

type Props = {
	params: {
		postTitle: string
	}
}

const PostPage = ({ params: { postTitle } }: Props) => {
	return (
		<main>
			<div>PostPage</div>
			<div>Post Title: {postTitle}</div>
		</main>
	)
}

export default PostPage
