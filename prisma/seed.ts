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
					tags: ['beach', 'nature', 'adventure'],
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
						tags: ['city', 'culture'],
						image: '/images/exploring-dubai-a-fusion-of-modernity-and-tradition/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Linnea',
				email: 'linnea@gmail.com',
				posts: {
					create: {
						title: 'Discovering Bali: Paradise Islands and Cultural Riches',
						slug: 'discovering-bali-paradise-islands-and-cultural-riches',
						subheading:
							'Bali captivates with its serene beaches, lush rice terraces, and vibrant culture.',
						content:
							"Bali, known as the 'Island of the Gods,' offers a diverse range of experiences from pristine beaches like Kuta and Seminyak to lush landscapes in Ubud. Explore ancient temples such as Tanah Lot and Uluwatu, witness traditional Balinese dance performances, or trek through terraced rice fields in Tegallalang. Indulge in Balinese cuisine, visit local markets, or unwind with yoga and spa retreats. With its warm hospitality, spiritual ambiance, and natural beauty, Bali enchants travelers seeking both relaxation and adventure.",
						tags: ['beach'],
						image: '/images/discovering-bali-paradise-islands-and-cultural-riches/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Julien',
				email: 'julien@gmail.com',
				posts: {
					create: {
						title: 'Paris: City of Lights and Romance',
						slug: 'paris-city-of-lights-and-romance',
						subheading:
							'Paris enchants with its iconic landmarks, artistic treasures, and gourmet delights.',
						content:
							"Paris, the capital of France, is synonymous with romance and elegance. Marvel at the Eiffel Tower's beauty, explore the Louvre Museum's vast art collection, and stroll along the Seine River. Visit Notre-Dame Cathedral, Montmartre's artistic streets, and the grand Champs-Élysées. Indulge in French cuisine at cozy bistros, sample pastries at patisseries, and savor wine at sidewalk cafes. Experience the city's fashion boutiques, vibrant markets, and lively nightlife. With its timeless charm and cultural allure, Paris captivates visitors from around the world.",
						tags: ['city', 'culture'],
						image: '/images/paris-city-of-lights-and-romance/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Carlos',
				email: 'carlos@gmail.com',
				posts: {
					create: {
						title: 'Exploring Rio de Janeiro: Beaches, Culture, and Vibrant City Life',
						slug: 'exploring-rio-de-janeiro-beaches-culture-and-vibrant-city-life',
						subheading:
							'Rio de Janeiro captivates with its stunning beaches, rich cultural heritage, and lively urban atmosphere.',
						content:
							"Rio de Janeiro, located in Brazil, is famous for its picturesque beaches such as Copacabana and Ipanema, where visitors can soak up the sun and enjoy water sports. Explore iconic landmarks like the Christ the Redeemer statue and Sugarloaf Mountain for panoramic views of the city. Immerse yourself in the city's vibrant culture with samba music, Carnival celebrations, and historic neighborhoods like Santa Teresa. Indulge in Brazilian cuisine at local restaurants, visit museums and art galleries, and experience the energy of Rio's nightlife. With its blend of natural beauty and urban allure, Rio de Janeiro offers a memorable travel experience.",
						tags: ['beach', 'city', 'culture'],
						image:
							'/images/exploring-rio-de-janeiro-beaches-culture-and-vibrant-city-life/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'David',
				email: 'david@gmail.com',
				posts: {
					create: {
						title: 'Exploring Marrakech: Culture, Adventure, and City Splendor',
						slug: 'exploring-marrakech-culture-adventure-and-city-splendor',
						subheading:
							'Marrakech enchants with its exotic culture, thrilling adventures, and bustling cityscape.',
						content:
							'Marrakech, located in Morocco, is a vibrant city steeped in history and culture. Explore the maze-like streets of the Medina, visit the iconic Jemaa el-Fnaa square with its bustling markets and street performers, and discover architectural marvels like the Bahia Palace and Koutoubia Mosque. Immerse yourself in Moroccan cuisine at local eateries and experience traditional hammams. For adventurers, nearby Atlas Mountains offer hiking and trekking opportunities, while camel rides and desert excursions in the nearby Sahara provide unforgettable experiences. With its blend of ancient charm and modern vitality, Marrakech promises a memorable travel experience.',
						tags: ['city', 'culture'],
						image: '/images/exploring-marrakech-culture-adventure-and-city-splendor/hero.jpg',
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
