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

	//Create a user with a new post (or upsert: update if exists, else create)
	//My User model has name (string), email (string), and posts (array), so I
	//first create a user, then inside the same query I create a post for that user
	await prisma.user.create({
		data: {
			name: 'Al',
			email: 'al@gmail.com',
			posts: {
				create: {
					title: 'Going to USA',
					content:
						'The United States is a diverse nation known for its cultural influence, economic power, and technological innovation.',
					tags: ['nature', 'usa'],
				},
			},
		},
	})
	await prisma.user.create({
		data: {
			name: 'Anna',
			email: 'anna@gmail.com',
			posts: {
				create: {
					title: 'Going to the Costa Rica',
					content:
						'Costa Rica is known for its rich biodiversity, stunning natural landscapes, and commitment to environmental conservation.',
					tags: ['nature', 'adventure', 'costa rica'],
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
