// Run seed script with npx prisma db seed
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	// Delete all posts
	await prisma.post.deleteMany()
	const postCount = await prisma.post.count()
	console.log(`Number of posts after delete: ${postCount}`)

	// Delete all users
	await prisma.user.deleteMany()
	const userCount = await prisma.user.count()
	console.log(`Number of users after delete: ${userCount}`)

	// Create users
	await prisma.user.create({
		data: {
			name: 'Sophie Eliasson',
			email: 'sophie@gmail.com',
			posts: {
				create: {
					title: "A Journey Through America's Landscapes and Cultures",
					slug: 'a-journey-through-americas-landscapes-and-cultures',
					subheading:
						'The United States is a diverse nation known for its cultural influence, economic power, and technological innovation.',
					content:
						"The United States is a vast and diverse country, home to a wide range of landscapes, cultures, and attractions. From the bustling streets of New York City to the serene beauty of the Grand Canyon, there's something for everyone in the USA. Whether you're exploring the historic monuments of Washington, D.C., sampling the cuisine of New Orleans, or hiking in the Rocky Mountains, you're sure to be amazed by the country's natural beauty and cultural richness. With its iconic landmarks, world-class museums, and vibrant cities, it is a destination that never fails to impress.\nThe United States also embraces its role as a hub of innovation and technology, particularly in regions like Silicon Valley, which has been the launchpad for countless startups and tech giants alike. This spirit of innovation permeates various sectors from aerospace in Cape Canaveral to film and media in Hollywood, making it a global leader in multiple industries.\n \nAdditionally, the country's educational system, with illustrious institutions like Harvard, MIT, and Stanford, attracts students from around the world, fostering a culture of academic excellence and research. These centers of learning are not just cradles of innovation but also act as cultural melting pots where future leaders and thinkers converge from diverse backgrounds. The vast array of cultural expressions from these interactions enriches the social landscape, contributing to the dynamic and ever-evolving American culture.The United States' rich tapestry of arts and entertainment is showcased through its numerous music, film, and arts festivals that take place across the country. Events like the Sundance Film Festival in Utah, South by Southwest in Texas, and Broadway shows in New York offer visitors a taste of American creativity and contribute significantly to the global arts scene. These festivals not only display the latest in entertainment but also stimulate local economies and promote cultural exchange among artists from different parts of the world.\nThe diverse natural landscapes of the United States also provide a backdrop for a variety of recreational activities that cater to all preferences, from the calm, scenic bike paths in Napa Valley to the rigorous climbs in the Appalachians, and the world-class surfing at California's beaches. National parks such as Yellowstone and Zion, with their extensive networks of trails and breathtaking vistas, serve as prime destinations for those looking to connect with nature. These parks play a crucial role in wildlife conservation and offer educational opportunities that promote environmental awareness among visitors.\nAdditionally, the culinary diversity in the United States mirrors its cultural melting pot, with each region offering distinct flavors and dishes. From the deep-dish pizzas of Chicago to the fresh seafood of the Gulf Coast and the organic produce-driven cuisine of the West Coast, the American culinary scene is a testament to its agricultural heritage and its ongoing culinary innovation. Food festivals and street food markets in various cities provide a platform for culinary artists to showcase their creativity, blending traditional recipes with contemporary tastes to reflect the nation's rich cultural mosaic.",
					quote:
						"From Silicon Valley's innovations to the timeless vistas of the Grand Canyon, the United States is a mosaic of progress and beauty.",

					tags: ['nature', 'culture'],
					image: '/images/a-journey-through-americas-landscapes-and-cultures/hero.jpg',
				},
			},
		},
	})
	await prisma.user.create({
		data: {
			name: 'Mimmi Vikström',
			email: 'mimmi@gmail.com',
			posts: {
				create: {
					title: 'Exploring Costa Rica´s Natural Wonders',
					slug: 'exploring-costa-ricas-natural-wonders',
					subheading:
						'Costa Rica is known for its rich biodiversity, stunning natural landscapes, and commitment to environmental conservation.',
					content:
						"Costa Rica's dedication to environmental education further strengthens its ecological initiatives. Schools across the country integrate environmental studies from an early age, fostering an appreciation for conservation among the youth. This educational approach is complemented by community-led conservation projects that involve local and international volunteers, ensuring that the principles of sustainability reach every corner of society and promote a widespread culture of environmental respect.\nCosta Rica's dedication to environmental education further strengthens its ecological initiatives. Schools across the country integrate environmental studies from an early age, fostering an appreciation for conservation among the youth. This educational approach is complemented by community-led conservation projects that involve local and international volunteers, ensuring that the principles of sustainability reach every corner of society and promote a widespread culture of environmental respect.\nIn addition to its robust educational framework, Costa Rica also harnesses the power of ecotourism to teach both locals and visitors about the importance of environmental preservation. Guided tours in regions such as Tortuguero National Park not only showcase the country's stunning biodiversity but also educate participants about the critical roles these ecosystems play in global ecology. These eco-tours are often led by local experts who share their knowledge and passion for conservation, turning each excursion into an informative and transformative experience.\nThe benefits of ecotourism extend beyond education, as they also contribute significantly to the local economy. Revenue generated from ecotourism helps fund conservation projects and supports the livelihoods of local communities, creating a sustainable model where economic growth and environmental health are mutually supportive. This symbiotic relationship underscores the potential of ecotourism to enact positive change both locally and globally.",
					quote:
						'Costa Rica: where every trail leads to a new discovery and every sunrise promises an unforgettable adventure.',
					tags: ['nature', 'adventure'],
					image: '/images/exploring-costa-ricas-natural-wonders/hero.jpg',
				},
			},
		},
	}),
		await prisma.user.create({
			data: {
				name: 'Robin Johansson',
				email: 'robin@gmail.com',
				posts: {
					create: {
						title: 'Discovering Kyoto: Exploring Japan´s Cultural Heart',
						slug: 'discovering-kyoto-exploring-japans-cultural-heart',
						subheading:
							'Kyoto is a city steeped in history, known for its temples, traditional tea ceremonies, and beautiful gardens.',
						content:
							"Kyoto, once the imperial capital of Japan, is a city renowned for its historical landmarks, including ancient temples, traditional tea houses, and exquisite gardens such as the famous Kinkaku-ji (Golden Pavilion) and Ginkaku-ji (Silver Pavilion). Visitors can immerse themselves in the beauty of cherry blossom season at Maruyama Park or experience the tranquility of Zen gardens at Ryoan-ji Temple. Kyoto's rich cultural heritage, preserved geisha districts like Gion, and vibrant traditional arts scene make it a must-visit destination for travelers seeking to delve into Japan's cultural roots.\nKyoto's commitment to preserving its traditional craftsmanship is evident in its numerous workshops and galleries, where visitors can learn about and participate in centuries-old practices such as Kintsugi (the art of repairing broken pottery with gold) and Yuzen dyeing techniques used in Kimono making. These activities provide a hands-on approach to understanding the city's cultural depth.\n \nAdditionally, Kyoto embraces the modern world with its annual festivals and events that blend ancient traditions with contemporary life. The Gion Matsuri, one of the most famous festivals in Japan, features elaborate floats and traditional clothing, linking the past to the present. Kyoto also hosts the Kyoto International Manga Museum and numerous film and music festivals throughout the year, showcasing its cultural diversity and vibrancy.\nKyoto not only preserves its ancient heritage but also celebrates its natural setting with seasonal events that attract tourists worldwide. The city is particularly renowned for its Hanami festivals, where locals and visitors alike gather under blooming sakura (cherry trees) in spaces like the picturesque Arashiyama district. These celebrations are complemented by autumn leaf viewing in later months, particularly vibrant at temples like Eikando, known for its stunning autumn colors.\nBeyond the visual arts, Kyoto is a haven for lovers of performing arts, with traditional theaters offering performances of Noh and Kyogen—classical Japanese musical dramas. These performances are held in historic venues such as the Minami-za, one of the oldest Kabuki theaters in Japan. The art of Kabuki, with its elaborate makeup and costumes, offers a dramatic insight into feudal Japanese culture and aesthetics.\nFurthermore, Kyoto's culinary heritage offers a unique taste of Japan's gastronomic offerings. The city is famous for kaiseki, a traditional multi-course Japanese meal that emphasizes seasonality, taste balance, and presentation. Many kaiseki meals are enjoyed in old ryokans and tea houses overlooking serene gardens, providing a holistic experience of Japanese tradition. This culinary tradition extends to street food markets such as Nishiki Market, where visitors can sample a variety of local foods, from sweet mochi to spicy pickles, deepening their experience of Kyoto's rich cultural palette.",
						quote:
							'Kyoto: where the past meets the present in a harmonious dance of tradition and innovation.',
						tags: ['culture'],
						image: '/images/discovering-kyoto-exploring-japans-cultural-heart/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Emma Lilja',
				email: 'emma@gmail.com',
				posts: {
					create: {
						title: 'Exploring Dubai: A Fusion of Modernity and Tradition',
						slug: 'exploring-dubai-a-fusion-of-modernity-and-tradition',
						subheading:
							'Dubai dazzles with its futuristic skyscrapers, luxury shopping, and desert adventures.',
						content:
							"Dubai, the jewel of the UAE, is renowned for its iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an artificial archipelago. Visitors can experience the blend of traditional Emirati culture and modern cosmopolitanism at the Dubai Museum, Sheikh Zayed Grand Mosque, and bustling souks. Indulge in luxury shopping at the Dubai Mall, enjoy desert safaris with thrilling dune bashing, or relax on pristine beaches along the Arabian Gulf. With its vibrant nightlife, gourmet dining, and year-round sunshine, Dubai offers a unique and unforgettable travel experience.\nDubai's commitment to futuristic innovation extends beyond its skyscrapers to initiatives like the Dubai Smart City project, which integrates cutting-edge technology to enhance urban living. This initiative fosters developments in connectivity, smart transportation systems, and sustainable energy solutions, setting a global benchmark for smart cities.\nMoreover, Dubai's cultural fabric is woven with numerous festivals and events that draw visitors from across the globe. The Dubai Shopping Festival and Dubai Food Festival showcase the city's retail and culinary delights, while the annual Dubai International Film Festival highlights the region's creative talent. These events not only enrich the local culture but also bolster Dubai's status as an international hub of commerce and creativity. Dubai's architectural innovation is also home to an array of uniquely themed water parks, which offer a break from the desert heat with thrilling rides and family-friendly activities.",
						quote: 'Dubai: where tradition meets innovation in a dazzling display of modernity.',
						tags: ['city', 'culture'],
						image: '/images/exploring-dubai-a-fusion-of-modernity-and-tradition/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Linnea Ljungholm',
				email: 'linnea@gmail.com',
				posts: {
					create: {
						title: 'Discovering Bali: Paradise Islands and Cultural Riches',
						slug: 'discovering-bali-paradise-islands-and-cultural-riches',
						subheading:
							'Bali captivates with its serene beaches, lush rice terraces, and vibrant culture.',
						content:
							"Bali, known as the 'Island of the Gods,' offers a diverse range of experiences from pristine beaches like Kuta and Seminyak to lush landscapes in Ubud. Explore ancient temples such as Tanah Lot and Uluwatu, witness traditional Balinese dance performances, or trek through terraced rice fields in Tegallalang. Indulge in Balinese cuisine, visit local markets, or unwind with yoga and spa retreats. With its warm hospitality, spiritual ambiance, and natural beauty, Bali enchants travelers seeking both relaxation and adventure.Bali also thrives with its vibrant arts scene, often displayed in various galleries and community art spaces around the island. Attend art exhibitions and workshops in Ubud, which highlight the skills of both local and international artists. Here, the artistic heritage spans generations, evidenced by intricate wood carvings and Batik fabric designs.\nAdditionally, Bali's ecotourism is gaining momentum, offering visitors sustainable travel options that protect its unique environment while enriching the travel experience. Join guided eco-tours that explore the mangroves in Denpasar or participate in coral reef restoration projects along the coast. These initiatives help preserve the island's ecosystems, ensuring that its natural splendor can be appreciated by future generations.\nBali's cultural tapestry is richly woven with a variety of festivals and ceremonies that are key to its identity. Among these, the Galungan festival, which celebrates the victory of good over evil, transforms the island with ornately decorated bamboo poles lining the streets, while traditional offerings are made at family temples. This festival, along with others like Nyepi, the day of silence that marks the Balinese New Year, offers a deep dive into the spiritual and communal life of the Balinese people.\nBeyond the cultural and eco-tourism attractions, Bali is also renowned for its world-class surfing and diving spots which attract adventurers from around the world. The island's coral reefs are teeming with life and are accessible from a multitude of beaches that offer diving experiences for all skill levels. Surf spots like Uluwatu and Padang Padang are famed for their challenging waves and beautiful settings, making them popular stops for surf enthusiasts. These natural resources are not only a draw for tourists but also play an essential role in the island's marine biodiversity conservation efforts.",
						quote:
							'Bali: where every sunrise brings a new adventure and every sunset promises serenity.',
						tags: ['beach'],
						image: '/images/discovering-bali-paradise-islands-and-cultural-riches/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Julien Dupont',
				email: 'julien@gmail.com',
				posts: {
					create: {
						title: 'Paris: City of Lights and Romance',
						slug: 'paris-city-of-lights-and-romance',
						subheading:
							'Paris enchants with its iconic landmarks, artistic treasures, and gourmet delights.',
						content:
							"Paris, the capital of France, is synonymous with romance and elegance. Marvel at the Eiffel Tower's beauty, explore the Louvre Museum's vast art collection, and stroll along the Seine River. Visit Notre-Dame Cathedral, Montmartre's artistic streets, and the grand Champs-Élysées. Indulge in French cuisine at cozy bistros, sample pastries at patisseries, and savor wine at sidewalk cafes. Experience the city's fashion boutiques, vibrant markets, and lively nightlife. With its timeless charm and cultural allure, Paris captivates visitors from around the world.\nParis's cultural scene extends into the realms of music and theater, which are integral to its identity. The city boasts a vibrant classical music scene with performances at venues like the Opéra Garnier and the Philharmonie de Paris. Jazz clubs thrive in the Latin Quarter, where live bands play into the early hours. Theater enthusiasts can enjoy a variety of shows ranging from avant-garde performances at La Colline théâtre national to classic French comedies at the Comédie Française. \n \nFurthermore, Paris's dedication to the arts is evident in its numerous smaller museums and galleries, which showcase both contemporary and historical works. The Musée d'Orsay displays masterpieces of French art from the 19th and early 20th centuries, including works by Monet and Van Gogh. Meanwhile, smaller galleries like the Jeu de Paume focus on photography and visual arts. Seasonal exhibitions across the city offer visitors and locals alike a constantly evolving insight into the global and local art scene.\nParis also serves as a cornerstone for literary arts, hosting an array of iconic bookstores such as Shakespeare and Company, which has been a meeting place for famous writers and a center for literary culture since the early 20th century. The city's literary festivals and events, like the Paris Book Fair, continue to attract international authors and literary enthusiasts, celebrating the written word and its impact on culture and society.\nParis's influence extends to the cinematic world, recognized annually at events like the Paris Film Festival. This festival, along with numerous independent cinemas such as Le Champo, showcase both French and international films, reflecting the city's role in the evolution of global cinema. Film lovers can enjoy everything from classic French films to contemporary global cinema, making Paris a vibrant center for film aficionados.\nAdditionally, the city's commitment to public art enhances its streets and public spaces, with installations and sculptures that blend historical depth with contemporary insight. From the Stravinsky Fountain next to the Pompidou Center to the open-air exhibitions at La Défense, the integration of art into everyday life enriches the urban environment and makes art accessible to all, reinforcing Paris's reputation as an art capital of the world.",
						quote: 'Paris: where every corner tells a story and every moment is a work of art.',
						tags: ['city', 'culture'],
						image: '/images/paris-city-of-lights-and-romance/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Carlos García',
				email: 'carlos@gmail.com',
				posts: {
					create: {
						title: 'Exploring Rio de Janeiro: Beaches, Culture, and Vibrant City Life',
						slug: 'exploring-rio-de-janeiro-beaches-culture-and-vibrant-city-life',
						subheading:
							'Rio de Janeiro captivates with its stunning beaches, rich cultural heritage, and lively urban atmosphere.',
						content:
							"Rio de Janeiro, located in Brazil, is famous for its picturesque beaches such as Copacabana and Ipanema, where visitors can soak up the sun and enjoy water sports. Explore iconic landmarks like the Christ the Redeemer statue and Sugarloaf Mountain for panoramic views of the city. Immerse yourself in the city's vibrant culture with samba music, Carnival celebrations, and historic neighborhoods like Santa Teresa. Indulge in Brazilian cuisine at local restaurants, visit museums and art galleries, and experience the energy of Rio's nightlife. With its blend of natural beauty and urban allure, Rio de Janeiro offers a memorable travel experience.\nRio de Janeiro's natural landscapes extend beyond its famous beaches, venturing into lush rainforests that are teeming with biodiversity. The Tijuca National Park, one of the largest urban rainforests in the world, offers hiking trails that lead to stunning waterfalls and provide sweeping views of the city. This green sanctuary amidst the city highlights the remarkable contrast between Rio’s urban architecture and its natural wonders.\nAdditionally, the cultural tapestry of Rio is enriched by its numerous festivals that go beyond the world-renowned Carnival. Local festivals, such as the Festival do Rio (Rio's International Film Festival), showcase a wide array of films and serve as a gathering spot for filmmakers and fans alike. The Junina Festivals celebrate traditional music, dance, and food from the northeastern regions of Brazil, filling the streets with vibrant decorations and costumes during the winter months. These cultural festivities offer visitors a deeper insight into the diverse cultural heritage that shapes the identity of Rio de Janeiro.\nRio's allure also includes its wide range of outdoor activities that capitalize on its unique geography. Beyond the beaches and mountains, the Rodrigo de Freitas Lagoon offers opportunities for rowing and cycling around its perimeter. This area becomes especially lively during the holiday season when it hosts a floating Christmas tree, attracting thousands of visitors for the light shows. \nRio de Janeiro also plays a pivotal role in Brazil's sports scene, having hosted the 2016 Summer Olympics. The city's sports facilities, including Maracanã Stadium, one of the largest football stadiums in the world, are frequented by locals and tourists alike for football matches and other events, embodying the passionate sports culture that thrives in this city. \nMoreover, Rio's commitment to art is evident in its street art and public murals, which cover entire facades of buildings in neighborhoods like Lapa and Santa Teresa. These vibrant artworks contribute to the visual identity of the city and are celebrated during the annual Carioca Art Festival, which transforms the city into an open-air gallery showcasing local and international artists.",
						quote:
							'Rio de Janeiro: where every moment is a celebration of life and every day is a new adventure.',
						tags: ['beach', 'city'],
						image:
							'/images/exploring-rio-de-janeiro-beaches-culture-and-vibrant-city-life/hero.jpg',
					},
				},
			},
		}),
		await prisma.user.create({
			data: {
				name: 'Elena Rodríguez',
				email: 'elena@example.com',
				posts: {
					create: {
						title: 'Patagonia: Snow-Capped Peaks, Glaciers, and Untamed Wilderness',
						slug: 'patagonia-snow-capped-peaks-glaciers-and-untamed-wilderness',
						subheading:
							'Patagonia enchants with its dramatic landscapes, pristine glaciers, and diverse wildlife.',
						content:
							"Patagonia, spanning across Chile and Argentina, offers a breathtaking winter wonderland. Explore snow-capped peaks of the Andes Mountains, home to towering glaciers such as Perito Moreno and Grey. Trek through pristine national parks like Torres del Paine and Los Glaciares, marveling at turquoise lakes and jagged peaks. Discover unique wildlife, including guanacos, pumas, and Andean condors, in their natural habitat. Experience thrilling outdoor activities like hiking, skiing, and ice climbing amidst Patagonia's untamed wilderness. Immerse yourself in local culture, enjoying traditional cuisine and hospitality in charming towns like El Calafate and Puerto Natales. Patagonia's blend of snow-capped peaks, glaciers, and untamed wilderness promises an unforgettable adventure.\nFor a deeper exploration of Patagonia, the narrative can extend into the varying climatic zones which dramatically affect the flora and fauna. As you move from the arid steppes to the lush rainforests, each environment offers its own unique beauty and challenges. For example, the eastern plains feature sparse vegetation and wind-swept vistas, where the hardy guanaco thrives. Conversely, the western forests are dense and humid, home to ancient alerce trees and a myriad of mosses that coat the forest floor.\nFurther enriching the experience, Patagonia's coastal areas provide a stark contrast to its inland terrains. The coastline is dotted with bustling penguin colonies and secluded beaches where elephant seals bask. Kayaking along the fjords can reveal hidden waterfalls and glaciers that are inaccessible by land. The interaction between the cold waters of the Pacific and the rugged coastline creates an incredibly rich marine environment, where whale watching has become a sought-after activity.\nCultural interactions in Patagonia also weave a rich tapestry of history and modernity. Indigenous communities such as the Mapuche and Tehuelche have left a lasting impact on the region's culture and traditions. Visitors can participate in cultural festivals that showcase traditional dances, music, and crafts. These experiences are complemented by the gaucho culture, which is still very much alive in the rural areas of Patagonia. The gauchos, with their distinctive attire and impressive horsemanship, embody the spirit of freedom and endurance that characterizes Patagonia.\nEach of these elements—diverse ecosystems, dynamic coastlines, and cultural richness—contributes to the allure of Patagonia, making it not just a travel destination but a profound journey into the heart of nature’s wonders and human heritage.\nThe remote and rugged region of Patagonia serves as a haven for eco-tourists seeking authentic engagement with nature. The region's extensive network of trails provides access to remote areas otherwise untouched by human development, offering pristine landscapes for long-distance hiking and camping. Patagonian routes such as the famous W Trek in Torres del Paine or the traverse across Los Glaciares National Park allow adventurers to experience the raw beauty of the terrain, from expansive ice fields to deep blue glacial lakes.\nPatagonia is also a focal point for scientific research, particularly in fields related to glaciology, climatology, and ecology. Research stations scattered across the region work on global climate change studies, leveraging Patagonia's relatively undisturbed environment to track the retreat of glaciers and changes in biodiversity. This scientific interest adds another layer of depth to the region, highlighting its significance not only as a travel destination but also as a critical site for understanding environmental changes on a global scale.\nMoreover, the integration of sustainable practices within the tourism industry has been pivotal in preserving Patagonia's ecological integrity. Efforts such as controlled access to vulnerable areas, promotion of leave-no-trace principles, and the development of eco-friendly lodges ensure that tourism has a minimal environmental impact. These initiatives are crucial in maintaining the delicate balance of Patagonia's ecosystems, ensuring that its unparalleled wilderness remains intact for future generations to admire and study.",
						quote: 'Patagonia: where every step is an adventure and every vista is a masterpiece.',
						tags: ['nature', 'adventure'],
						image: '/images/patagonia-snow-capped-peaks-glaciers-and-untamed-wilderness/hero.jpg',
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
