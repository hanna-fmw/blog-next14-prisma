import prisma from '@/lib/db'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import HeroContent from '@/app/components/HeroContent'
import { IoMdContact } from 'react-icons/io'

import { calculateReadingTime } from '@/utils/readingTime'
import Footer from '@/app/components/Footer'

type Props = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params: { slug } }: Props) {
	// Fetch a single post
	const post = await prisma.post.findUnique({
		where: { slug: slug },
		include: { author: true },
	})

	// Fetch all posts
	const allPosts = await prisma.post.findMany({
		include: { author: true }, //include author to access User model
	})

	// Filter posts with same tag
	const filteredSameTag = allPosts.filter(
		(singlePost) =>
			singlePost.id !== post?.id && singlePost.tags.some((tag) => post?.tags.includes(tag))
	)

	const month = post && post.date.getMonth() + 1

	// Reading time calculation
	const content = post?.content ?? ''
	const readingTime = calculateReadingTime(content)

	return (
		<main>
			<section
				style={{
					backgroundImage: `url('${post?.image}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
				className='w-screen min-w-full h-[70vh] relative'>
				<Navbar />
				<HeroContent
					postTitle={post?.title ?? 'Travel around the World'}
					subheading={post?.subheading}
					contentClassName='bottom-[10%] w-1/2 md:w-1/2 lg:w-1/3 px-[20px] md:px-[70px]'
					titleClassName='text-2xl md:text-4xl my-6 mb-2'
					textClassName='font-bold text-sm md:text-base'
					subheadingClassName='text-sm md:text-base'
				/>
			</section>

			<div className='mx-auto font-lora w-[70vw] my-20'>
				<div className='text-date-color text-base my-1'>
					<span>
						{`${post?.date?.getFullYear()}.${month?.toString().padStart(2, '0')}.${post?.date?.getDate()}`}
						&nbsp;&mdash;&nbsp;
					</span>
					<span>{readingTime}&nbsp;min</span>
				</div>
				<div>
					{(() => {
						// Split content into paragraphs and insert quote after second paragraph
						// const paragraphs = post?.content.split('\n')
						const paragraphs = post?.content.includes('\n') ? post?.content.split('\n') : [post?.content]

						const quote = post?.quote ? post.quote : ''
						if (paragraphs && paragraphs.length > 1) {
							paragraphs.splice(2, 0, quote)
						}

						// Add curly braces to quote
						return paragraphs?.map((paragraph, i) => {
							const isQuote = paragraph === quote
							const formattedQuote = isQuote ? `“${quote}”` : ''
							return (
								<p
									key={i}
									className={`font-lora ${isQuote ? 'text-quote-color mt-12 mb-12 font-bold text-3xl md:text-[30px] leading-tight' : 'text-lg my-4'} `}>
									{formattedQuote || paragraph}
								</p>
							)
						})
					})()}
				</div>
				<div className='border border-horizontal-line-color w-full my-16 md:my-24'></div>
				<div className='flex items-center gap-3 pb-12 md:pb-16'>
					<span>
						<IoMdContact size={30} />
					</span>
					<div className='flex flex-col'>
						<span className='font-semibold inline-block'>By {post?.author.name}</span>
						<span className='inline-block'>{post?.author.email}</span>
					</div>
				</div>
			</div>

			<section
				style={{ backgroundColor: 'rgba(229, 229, 229, 0.7)' }}
				className='w-screen px-10 py-14 md:py-20 lg:px-6 lg:py-24'>
				<section>
					<div className='lg:pl-20'>
						<h3 className='font-lora font-medium'>Related Posts</h3>
					</div>
					<div className='mx-auto grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[90vw]'>
						{filteredSameTag.map((post) => (
							<Link key={post.id} href={`/posts/${post.slug}`}>
								<section
									className='relative w-[40vw] h-[30vh] md:w-[30vw] md:h-[30vh] lg:w-[20vw] lg:h-[25vh]'
									key={post.id}
									style={{
										backgroundImage: `url('${post.image}')`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										borderRadius: '5px',
									}}>
									<HeroContent
										postTitle={post?.title ?? 'Travel around the World'}
										contentClassName='bottom-[6%] w-[40vw] md:w-[40vw] lg:w-[20vw] px-[20px] md:px-[20px]'
										titleClassName='text-xs w-1/2 my-1 mb-1'
										textClassName='font-bold text-xs md:xs'
										subheadingClassName='text-xs md:text-xs'
										showTag={false}
									/>
								</section>
							</Link>
						))}
					</div>
				</section>
			</section>
			<section>
				<Footer />
			</section>
		</main>
	)
}
