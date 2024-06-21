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
			name: 'Sophie',
			email: 'sophie@gmail.com',
			posts: {
				create: {
					title: "Exploring the Melting Pot: A Journey Through America's Landscapes and Cultures",
					slug: 'exploring-the-melting-pot-a-journey-through-americas-landscapes-and-cultures',
					subheading:
						'The United States is a diverse nation known for its cultural influence, economic power, and technological innovation.',
					content:
						"The United States is a vast and diverse country, home to a wide range of landscapes, cultures, and attractions. From the bustling streets of New York City to the serene beauty of the Grand Canyon, there's something for everyone in the USA. Whether you're exploring the historic monuments of Washington, D.C., sampling the cuisine of New Orleans, or hiking in the Rocky Mountains, you're sure to be amazed by the country's natural beauty and cultural richness. With its iconic landmarks, world-class museums, and vibrant cities, the USA is a destination that never fails to impress.",

					tags: ['nature'],
					image:
						'/images/exploring-the-melting-pot-a-journey-through-americas-landscapes-and-cultures/hero.png',
				},
			},
		},
	})
	await prisma.user.create({
		data: {
			name: 'Mimmi',
			email: 'mimmi@gmail.com',
			posts: {
				create: {
					title: 'Embracing Pura Vida: A Journey Through Costa Rica&apos;s Natural Wonders',
					slug: 'embracing-pura-vida-a-journey-through-costa-ricas-natural-wonders',
					subheading:
						'Costa Rica is known for its rich biodiversity, stunning natural landscapes, and commitment to environmental conservation.',
					content:
						"Costa Rica is a small country in Central America known for its lush jungles, stunning beaches, and diverse wildlife. It's a popular destination for eco-tourists and adventure seekers, offering a wide range of outdoor activities such as hiking, surfing, and zip-lining. Whether you're exploring the cloud forests of Monteverde, relaxing on the beaches of Manuel Antonio, or soaking in the hot springs of Arenal Volcano, Costa Rica has something for everyone. With its friendly locals, delicious cuisine, and laid-back vibe, it's no wonder that Costa Rica is often referred to as the happiest country in the world.",
					tags: ['nature', 'adventure'],
					image:
						'/images/embracing-pura-vida-a-journey-through-costa-ricas-natural-wonders/hero.png',
				},
			},
		},
	}),
		await prisma.user.create({
			data: {
				name: 'Robin',
				email: 'robin@gmail.com',
				posts: {
					create: {
						title: 'Discovering Kyoto: Exploring Japan&apos;s Cultural Heart',
						slug: 'discovering-kyoto-exploring-japans-cultural-heart',
						subheading:
							'Kyoto is a city steeped in history, known for its temples, traditional tea ceremonies, and beautiful gardens.',
						content:
							"Kyoto, once the imperial capital of Japan, is a city renowned for its historical landmarks, including ancient temples, traditional tea houses, and exquisite gardens such as the famous Kinkaku-ji (Golden Pavilion) and Ginkaku-ji (Silver Pavilion). Visitors can immerse themselves in the beauty of cherry blossom season at Maruyama Park or experience the tranquility of Zen gardens at Ryoan-ji Temple. Kyoto's rich cultural heritage, preserved geisha districts like Gion, and vibrant traditional arts scene make it a must-visit destination for travelers seeking to delve into Japan's cultural roots.",
						tags: ['culture'],
						image: '/images/discovering-kyoto-exploring-japans-cultural-heart/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Emma',
				email: 'emma@gmail.com',
				posts: {
					create: {
						title: 'Exploring Dubai: A Fusion of Modernity and Tradition',
						slug: 'exploring-dubai-a-fusion-of-modernity-and-tradition',
						subheading:
							'Dubai dazzles with its futuristic skyscrapers, luxury shopping, and desert adventures.',
						content:
							"Dubai, the jewel of the UAE, is renowned for its iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an artificial archipelago. Visitors can experience the blend of traditional Emirati culture and modern cosmopolitanism at the Dubai Museum, Sheikh Zayed Grand Mosque, and bustling souks. Indulge in luxury shopping at the Dubai Mall, enjoy desert safaris with thrilling dune bashing, or relax on pristine beaches along the Arabian Gulf. With its vibrant nightlife, gourmet dining, and year-round sunshine, Dubai offers a unique and unforgettable travel experience.",
						tags: ['city', 'luxury', 'adventure'],
						image: '/images/exploring-dubai-a-fusion-of-modernity-and-tradition/hero.jpg',
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
