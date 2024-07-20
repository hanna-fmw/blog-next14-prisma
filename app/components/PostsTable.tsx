import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import DeletePostButton from './DeletePostButton'
import { Button } from './ui/button'
import Link from 'next/link'

const PostsTable = ({ posts }: any) => {
	// Function to create an excerpt from the content
	function trimContent(content: string, maxLength: number) {
		// If the content is shorter than the maxLength, return it as is.
		if (content.length <= maxLength) return content

		// Find the last space before maxLength to avoid cutting in the middle of a word.
		let trimmedContent = content.slice(0, maxLength)
		const lastSpaceIndex = trimmedContent.lastIndexOf(' ')

		// If there's a space, trim up to that space. Otherwise, return the content as is.
		if (lastSpaceIndex > 0) {
			trimmedContent = trimmedContent.slice(0, lastSpaceIndex)
		}

		return trimmedContent + '...'
	}

	return (
		<Table className='px-10'>
			<TableHeader>
				<TableRow>
					<TableHead>Title</TableHead>
					<TableHead>Subheading</TableHead>
					<TableHead>Content</TableHead>
					<TableHead>Author</TableHead>
					<TableHead className='w-[100px]'>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{posts.map((post: any) => (
					<TableRow key={post.id}>
						<TableCell className='font-medium'>{post.title}</TableCell>
						<TableCell>{post.subheading}</TableCell>
						{/* <TableCell>{post.content.slice(0, 100)}</TableCell> */}
						<TableCell>{trimContent(post.content, 100)}</TableCell>
						<TableCell>{post.author.name}</TableCell>

						<TableCell className='flex gap-2'>
							<DeletePostButton post={post} />
							<Button>
								<Link href={`http://localhost:3000/posts/${post.slug}`}>View</Link>
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default PostsTable
