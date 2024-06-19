//run this seed script with npx prisma db seed
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
	//Delete all posts
	await prisma.post.deleteMany()
	const postCount = await prisma.post.count()
	console.log(`Number of posts after delete: ${postCount}`)

	//Delete all users
	await prisma.user.deleteMany()
	const userCount = await prisma.user.count()
	console.log(`Number of users after delete: ${userCount}`)

	//Create a user with a new post
	await prisma.user.create({
		data: {
			name: 'Al',
			email: 'al@gmail.com',
			posts: {
				create: {
					title: 'Post 1',
					content: 'Content 1',
					tags: ['red', 'green', 'blue'],
				},
			},
		},
	})
}
main()
	.catch((e) => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
