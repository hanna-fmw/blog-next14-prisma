import Link from 'next/link'
import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { IoMdGlobe } from 'react-icons/io'
import AuthButton from './AuthButton'
import SignupButton from './SignupButton'

const Navbar = () => {
	return (
		<div
			className='w-screen flex justify-between items-center px-[20px] md:px-[70px] h-20'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
			<Link
				href='/'
				className='cursor-pointer font-semibold text-navbar-link-color hover:text-navbar-link-hover-color'>
				<IoMdGlobe size={25} />
			</Link>

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
				<Link href='/' className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<SlSocialFacebook size={15} />
				</Link>
				<Link href='/' className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<SlSocialTwitter size={15} />
				</Link>
				<Link href='/' className='text-navbar-link-color hover:text-navbar-link-hover-color'>
					<SlSocialYoutube size={15} />
				</Link>
				<SignupButton />
				<AuthButton />
			</nav>
		</div>
	)
}

export default Navbar
