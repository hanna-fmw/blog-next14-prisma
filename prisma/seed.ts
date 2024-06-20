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
					slug: 'going-to-usa',
					subheading:
						'The United States is a diverse nation known for its cultural influence, economic power, and technological innovation.',
					content:
						"The United States is a vast and diverse country, home to a wide range of landscapes, cultures, and attractions. From the bustling streets of New York City to the serene beauty of the Grand Canyon, there's something for everyone in the USA. Whether you're exploring the historic monuments of Washington, D.C., sampling the cuisine of New Orleans, or hiking in the Rocky Mountains, you're sure to be amazed by the country's natural beauty and cultural richness. With its iconic landmarks, world-class museums, and vibrant cities, the USA is a destination that never fails to impress.",

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
					title: 'Going to Costa Rica',
					slug: 'going-to-costa-rica',
					subheading:
						'Costa Rica is known for its rich biodiversity, stunning natural landscapes, and commitment to environmental conservation.',
					content:
						"Costa Rica is a small country in Central America known for its lush jungles, stunning beaches, and diverse wildlife. It's a popular destination for eco-tourists and adventure seekers, offering a wide range of outdoor activities such as hiking, surfing, and zip-lining. Whether you're exploring the cloud forests of Monteverde, relaxing on the beaches of Manuel Antonio, or soaking in the hot springs of Arenal Volcano, Costa Rica has something for everyone. With its friendly locals, delicious cuisine, and laid-back vibe, it's no wonder that Costa Rica is often referred to as the happiest country in the world.",
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
