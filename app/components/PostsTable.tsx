import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import DeletePostButton from './DeletePostButton'
import { Button } from './ui/button'
import Link from 'next/link'

const PostsTable = ({ posts }: any) => {
	/**
	 * Trims the content to a specified maximum length and adds an ellipsis if truncated.
	 * 
	 * @param {string} content - The original content to be trimmed.
	 * @param {number} maxLength - The maximum allowed length of the trimmed content.
	 * @returns {string} The trimmed content, ending with '...' if truncated.
	 * 
	 * @example
	 * trimContent("This is a long sentence.", 10) // Returns "This is a..."
	 * trimContent("Short", 10) // Returns "Short"
	 */
	function trimContent(content: string, maxLength: number) {
		if (content.length <= maxLength) return content

		let trimmedContent = content.slice(0, maxLength)
		const lastSpaceIndex = trimmedContent.lastIndexOf(' ')

		if (lastSpaceIndex > 0) {
			trimmedContent = trimmedContent.slice(0, lastSpaceIndex)
		}

		return trimmedContent + '...'
	}

	return (
		<Table className='mx-auto'>
			<TableHeader>
				<TableRow>
					<TableHead>Title</TableHead>
					<TableHead>Subheading</TableHead>
					<TableHead>Content</TableHead>
					<TableHead>Author</TableHead>
					<TableHead>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{posts.map((post: any) => (
					<TableRow key={post.id}>
						<TableCell className='font-medium'>{post.title}</TableCell>
						<TableCell>{post.subheading}</TableCell>
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
