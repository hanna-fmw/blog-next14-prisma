import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { login, signup } from '../login/actions'

export default async function AuthButton() {
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
			<form action={signOut}>
				<Button>Logout</Button>
			</form>
		</div>
	) : (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline'>Login</Button>
			</PopoverTrigger>

			<PopoverContent className='w-80 flex flex-col gap-4'>
				<h4 className='font-medium'>Login</h4>
				<p className='text-sm text-muted-foreground'>
					Enter your email below to login to your account.
				</p>
				<form id='login-form' className='grid gap-4'>
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
					<Button formAction={login} className='w-full'>
						Login
					</Button>
				</form>
			</PopoverContent>
		</Popover>
	)
}
