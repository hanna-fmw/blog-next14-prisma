import React from 'react'

const ProductPage: React.FC = () => {
	return (
		<div className='min-h-screen p-8'>
			<div className='max-w-screen-xl mx-auto p-6  flex flex-col md:flex-row'>
				<div className='md:w-1/2 p-4'>
					{/* Left column for product images */}
					<div className='rounded-lg w-full h-100 overflow-hidden'>
						<img src='vercel.svg' alt='Product' className='object-cover w-full h-full' />
					</div>
				</div>
				<div className='md:w-1/2 p-4'>
					{/* Right column for product details */}
					<h1 className='text-2xl font-semibold'>Product Name</h1>
					<p className='text-gray-600 dark:text-gray-400'>Product description goes here.</p>
					<p className='text-2xl font-semibold mt-4'>799 kr</p>

					{/* Additional Information with Gray Background */}
					<div className='mt-8 bg-gray-200 dark:bg-neutral-800 p-4 rounded-md'>
						<div className='mb-2'>
							<strong></strong>
						</div>
						<ul className='list-none ml-8'>
							<li>✓ Free shipping over 499 SEK</li>
							<li>✓ Free returns on new orders</li>
							<li>✓ Fast next day delivery</li>
						</ul>
					</div>

					{/* Product Description and Ratings */}
					<div className='mt-8'>
						<div className='mb-2'>
							<strong>Product Description:</strong>
						</div>
						<p>
							This is a detailed description of the product. It includes information about the
							material, size, and other relevant details.
						</p>

						<div className='mt-4'>
							<strong>Ratings:</strong>
						</div>
						{/* You can add a star rating component or display ratings as you prefer. */}
						<div className='flex items-center mt-2'>
							<span className='text-yellow-500 text-2xl'>★</span>
							<span className='text-yellow-500 text-2xl'>★</span>
							<span className='text-yellow-500 text-2xl'>★</span>
							<span className='text-yellow-500 text-2xl'>★</span>
							<span className='text-gray-400 text-2xl'>★</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
