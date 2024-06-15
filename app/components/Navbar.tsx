import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div
			className='w-screen flex justify-between items-center px-[20px] md:px-[70px] h-16 md:h-[80px]'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
			<h2 className='text-sm md:text-[20px]  font-semibold text-navbar-link-color hover:text-navbar-link-hover-color'>
				BLOG
			</h2>

			<nav className='flex gap-6 items-center'>
				<Link
					href='/'
					className='text-sm md:text-[12px] text-navbar-link-color hover:text-navbar-link-hover-color'>
					Home
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] text-navbar-link-color hover:text-navbar-link-hover-color text-[12px]'>
					About
				</Link>
				<Link
					href='/'
					className='text-sm md:text-[12px] text-navbar-link-color hover:text-navbar-link-hover-color text-[12px]'>
					Contact
				</Link>
				<Link
					href='/'
					className='w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] text-navbar-link-color hover:text-navbar-link-hover-color'>
					<Image src='/facebook.png' width={20} height={20} alt='Facebook logo' />
				</Link>
				<Link
					href='/'
					className='w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] text-navbar-link-color hover:text-navbar-link-hover-color'>
					<Image src='/twitter.png' width={20} height={20} alt='Twitter logo' />
				</Link>
				<Link
					href='/'
					className='w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] text-navbar-link-color hover:text-navbar-link-hover-color'>
					<Image src='/youtube.png' width={20} height={20} alt='YouTube logo' />
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
