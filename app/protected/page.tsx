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

import LoginButton from '../components/LoginButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/')
	}

	return (
		<div className='flex-1 w-full flex flex-col gap-20 items-center'>
			<div className='w-full'>
				<div className='py-6 font-bold bg-purple-950 text-center'>
					This is a protected page that you can only see as an authenticated user
				</div>
				<nav className='w-full flex justify-end  border-b border-b-foreground/10 h-16'>
					<div className='w-full max-w-4xl flex justify-between items-end p-3 text-sm'>
						<LoginButton />
					</div>
				</nav>
			</div>

			<div className='animate-in flex-1 flex flex-col gap-20 max-w-4xl px-3'>
				<main className='flex-1 flex flex-col gap-6'>
					{/* <AccountSettings /> */}
					Account Settings
				</main>
			</div>

			<footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
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
			</footer>
		</div>
	)
}
