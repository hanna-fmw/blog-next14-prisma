'use client'
import React from 'react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// function create() {
// 	//Create users
// 	prisma.user.create({
// 		data: {
// 			name: 'Björne',
// 			email: 'bjorne@gmail.com',
// 			posts: {
// 				create: {
// 					title: 'En röd katt i Järvsö',
// 					slug: 'a-cat-in-jarvso',
// 					subheading: 'Björne i Järvsö.',
// 					content: 'Björne är en röd katt som bor i Järvsö och älskar att jaga möss.',
// 					quote: 'Ett citat från Björne.',

// 					tags: ['nature', 'culture'],
// 					image: '/images/discovering-bali-paradise-islands-and-cultural-riches/hero.jpg',
// 				},
// 			},
// 		},
// 	})
// }
// // create()
// // 	.catch((e) => {
// // 		throw e
// // 	})
// // 	.finally(async () => {
// // 		await prisma.$disconnect()
// // 	})

const CreateButton = () => {
	function create() {
		//Create users
		prisma.user.create({
			data: {
				name: 'Björne',
				email: 'bjorne@gmail.com',
				posts: {
					create: {
						title: 'En röd katt i Järvsö',
						slug: 'a-cat-in-jarvso',
						subheading: 'Björne i Järvsö.',
						content: 'Björne är en röd katt som bor i Järvsö och älskar att jaga möss.',
						quote: 'Ett citat från Björne.',

						tags: ['nature', 'culture'],
						image: '/images/discovering-bali-paradise-islands-and-cultural-riches/hero.jpg',
					},
				},
			},
		})
	}
	return <button onClick={() => create()}>Create</button>
}

export default CreateButton
