// import { redirect } from 'next/navigation'

// import { createClient } from '@/utils/supabase/server'

// export default async function PrivatePage() {
//   const supabase = createClient()

//   const { data, error } = await supabase.auth.getUser()
//   if (error || !data?.user) {
//     redirect('/login')
//   }

//   return <p>Hello {data.user.email}</p>
// }

import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import CreateButton from '../components/CreateButton'
import prisma from '@/lib/db'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function create() {
// 	//Create users
// 	await prisma.user.create({
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

export default async function ProtectedPage() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/')
	}

	const create = async () => {
		'use server'

		const supabase = createClient()
		await prisma.user.create({
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
		return redirect('/')
	}

	return (
		<div className='flex-1 w-full flex flex-col gap-20 items-center'>
			<div className='w-full'>
				<div className='py-6 font-bold text-white bg-purple-950 text-center'>
					This is a protected page that you can only see as an authenticated user
				</div>
				<nav className='w-full flex justify-end  border-b border-b-foreground/10 h-16'>
					<div className='w-full max-w-4xl flex justify-between items-end p-3 text-sm'>
						{/* This is both the Logout and Login button */}
						<AuthButton />
					</div>
				</nav>
				<form action={create}>
					<button>Create</button>
				</form>
			</div>

			<div className='animate-in flex-1 flex flex-col gap-20 max-w-4xl px-3'>
				<main className='flex-1 flex flex-col gap-6'>
					<CreateButton />
				</main>
			</div>

			{/* <footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
				<p>
					Powered by{' '}
					<a
						href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
						target='_blank'
						className='font-bold hover:underline'
						rel='noreferrer'>
						Supabase
					</a>
				</p>
			</footer> */}
		</div>
	)
}
