import Link from 'next/link'
import Button from '../components/Button'

export default function ErrorPage() {
	return (
		<div>
			<h1>Error</h1>
			<p>Sorry, something went wrong</p>
			<Button>
				<Link href='/'>Go back home</Link>
			</Button>
		</div>
	)
}
