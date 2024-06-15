import Image from 'next/image'
import HeroContent from './components/HeroContent'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'
import redRock from '../public/red-rock.png'
import bridgeAndBeach from '../public/bridge-and-beach.png'
import touchingWater from '../public/touching-water.png'

export default function Home() {
	return (
		<main>
			<section className='w-screen h-[90vh] bg-hero-bg bg-center object-cover relative'>
				<Navbar />
				<HeroContent />
			</section>

			<section className='w-screen px-[20px] md:px-[70px]'>
				<h1>Posts</h1>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					<PostCard img={redRock} />
					<PostCard img={bridgeAndBeach} />
					<PostCard img={touchingWater} />
				</div>
			</section>
		</main>
	)
}
