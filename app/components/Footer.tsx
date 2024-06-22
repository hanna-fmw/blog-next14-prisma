import React from 'react'

const Footer = () => {
	return (
		<footer className='w-screen py-10 mt-24 bg-[#212529]'>
			<section className='w-full py-10 grid grid-cols-3 font-lora text-white justify-center'>
				<div className='mx-auto'>
					<h2 className='text-[14px] mb-2 md:text-2xl'>Contact</h2>
					<ul>
						<li>info@blog.com</li>
						<li>+944 450 904 505</li>
					</ul>
				</div>
				<div className='mx-auto'>
					<h2 className='text-[14px] mb-2 md:text-2xl'>Legal</h2>
					<ul>
						<li>Terms</li>
						<li>Privacy</li>
					</ul>
				</div>
				<div className='mx-auto'>
					<h2 className='text-[14px] mb-2 md:text-2xl'>Connect</h2>
					<ul>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Instagram</li>
					</ul>
				</div>
			</section>
		</footer>
	)
}

export default Footer
