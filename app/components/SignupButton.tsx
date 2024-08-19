import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { signup } from '../login/actions'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Link from 'next/link'

export default async function SignupButton() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	const signOut = async () => {
		'use server'

		const supabase = createClient()
		await supabase.auth.signOut()
		return redirect('/')
	}

	return user ? (
		<div className='flex items-center gap-4'>
			<Button>
				<Link href='/admin'>Admin</Link>
			</Button>
		</div>
	) : (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline'>Signup</Button>
			</PopoverTrigger>

			<PopoverContent className='w-80 flex flex-col gap-4'>
				<h4 className='font-medium'>Signup</h4>
				<p className='text-sm text-muted-foreground'>
					Enter your email below to sign up for an account.
				</p>
				<form id='login-form' className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='username'>Name</Label>
						<Input id='username' name='username' type='text' placeholder='Jane Doe' required />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input id='email' name='email' type='email' placeholder='you@example.com' required />
					</div>
					<div className='grid gap-2'>
						<div className='flex items-center'>
							<Label htmlFor='password'>Password</Label>
						</div>
						<Input minLength={6} name='password' id='password' type='password' required />
					</div>

					<Button formAction={signup} className='w-full'>
						Sign up
					</Button>
				</form>
			</PopoverContent>
		</Popover>
	)
}
