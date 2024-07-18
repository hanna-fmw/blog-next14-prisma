import React from 'react'

type ButtonProps = {
	children?: React.ReactNode
	formAction?: (formData: FormData) => Promise<void>
}

const Button = ({ children, formAction }: ButtonProps) => {
	return (
		<button
			formAction={formAction}
			className='text-navbar-link-color bg-[#333] hover:bg-[#555555] py-2 px-4 rounded-md m-1'>
			{children}
		</button>
	)
}

export default Button
