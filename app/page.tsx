import Image from 'next/image'
import HeroContent from './components/HeroContent'

export default function Home() {
	return (
		<main className='w-screen px-[20px] md:px-[70px]'>
			<Image
				src='/hero-image.png'
				width={200}
				height={200}
				alt='Logo'
				className='-z-10 absolute top-0 left-0 w-full object-cover h-1/2'
			/>
			<HeroContent />
		</main>
	)
}
