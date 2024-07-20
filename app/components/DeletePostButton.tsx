'use client'
import React from 'react'
import { deletePost } from '../actions'
import { Button } from './ui/button'

const DeletePostButton = ({ post }: any) => {
	return <Button onClick={() => deletePost(post.slug)}>Delete Post</Button>
}

export default DeletePostButton
