import { RadioGroup } from "@headlessui/react"
import React, { useEffect, useState } from "react"
import "./detail.css"

import { StarIcon } from '@heroicons/react/20/solid'
import { json, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/CartReducer"
const Detail = () => {
	const dispatch = useDispatch()

	const [productdetail, setProductDetail] = useState({
		id: 1,
		title: "...",
		price: "...",
		category: "...",
		description: "...",
		image: "...",
	})
	const { id } = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
		.then((res) => res.json())
		.then((json) => setProductDetail(json))

		
    },[])
	

	const product = {
		name: "Basic Tee 6-Pack ",
		price: "$192",
		rating: 3.9,
		reviewCount: 117,
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
		imageAlt: "Two each of gray, white, and black shirts arranged on table.",
		colors: [
			{ name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
			{ name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
			{ name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
			{
				name: "Orange",
				class: "bg-orange-200",
				selectedClass: "ring-gray-900",
			},
			{ name: "Black", class: "bg-amber-900", selectedClass: "ring-gray-900" },
		],
		sizes: [
			{ name: "XXS", inStock: true },
			{ name: "XS", inStock: true },
			{ name: "S", inStock: true },
			{ name: "M", inStock: true },
			{ name: "L", inStock: true },
			{ name: "XL", inStock: true },
			{ name: "XXL", inStock: true },
			{ name: "XXXL", inStock: false },
		],
	}

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ")
	}
	const [selectedColor, setSelectedColor] = useState(product.colors[0])
	const [selectedSize, setSelectedSize] = useState(product.sizes[2])
	return (
		<div className='bg-gray-100 max-w-screen-xl mx-auto pt-10'>
			<div className='grid grid-cols-10 gap-3'>
				<div className='grid grid-row-2'>
					<img
						src={productdetail.image}
						alt='modelphoto'
						className='img-left my-3'
					/>
					<img
						src={productdetail.image}
						alt='modelphoto'
						className='img-left'
					/>
				</div>
				<div className='row-span-2 col-span-4 flex justify-center'>
					<img
						src={productdetail.image}
						alt='modelphoto'
						className='main-img mt-3 self-center '
					/>
				</div>
				<div className='product-detail mt-3 col-span-4 '>
					<h1 className="font-semibold text-2xl py-3"> {productdetail.title}</h1>
          <h1 className="text-2xl">{'$'+productdetail.price}</h1>
            {/* Reviews */}
            <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {product.count} reviews
                            </a>
                          </div>
                        </div>
				
					{/* color */}
					<div>
						<h4 className='text-sm font-medium text-gray-900'>Color</h4>

						<RadioGroup
							value={selectedColor}
							onChange={setSelectedColor}
							className='mt-4'
						>
							<RadioGroup.Label className='sr-only'>
								{" "}
								Choose a color{" "}
							</RadioGroup.Label>
							<span className='flex items-center space-x-3'>
								{product.colors.map((color) => (
									<RadioGroup.Option
										key={color.name}
										value={color}
										className={({ active, checked }) =>
											classNames(
												color.selectedClass,
												active && checked ? "ring ring-offset-1" : "",
												!active && checked ? "ring-2" : "",
												"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
											)
										}
									>
										<RadioGroup.Label
											as='span'
											className='sr-only'
										>
											{" "}
											{color.name}{" "}
										</RadioGroup.Label>
										<span
											aria-hidden='true'
											className={classNames(
												color.class,
												"h-8 w-8 border border-black border-opacity-10 rounded-full"
											)}
										/>
									</RadioGroup.Option>
								))}
							</span>
						</RadioGroup>
						{/* Sizes */}
						<div className='mt-10'>
							<div className='flex items-center justify-between'>
								<h4 className='text-sm font-medium text-gray-900'>Size</h4>
								<a
									href='#'
									className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
								>
									Size guide
								</a>
							</div>

							<RadioGroup
								value={selectedSize}
								onChange={setSelectedSize}
								className='mt-4'
							>
								<RadioGroup.Label className='sr-only'>
									{" "}
									Choose a size{" "}
								</RadioGroup.Label>
								<div className='grid grid-cols-4 gap-4'>
									{product.sizes.map((size) => (
										<RadioGroup.Option
											key={size.name}
											value={size}
											disabled={!size.inStock}
											className={({ active }) =>
												classNames(
													size.inStock
														? "bg-white shadow-sm text-gray-900 cursor-pointer"
														: "bg-gray-50 text-gray-200 cursor-not-allowed",
													active ? "ring-2 ring-indigo-500" : "",
													"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
												)
											}
										>
											{({ active, checked }) => (
												<>
													<RadioGroup.Label as='span'>
														{size.name}
													</RadioGroup.Label>
													{size.inStock ? (
														<span
															className={classNames(
																active ? "border" : "border-2",
																checked
																	? "border-indigo-500"
																	: "border-transparent",
																"pointer-events-none absolute -inset-px rounded-md"
															)}
															aria-hidden='true'
														/>
													) : (
														<span
															aria-hidden='true'
															className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
														>
															<svg
																className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
																viewBox='0 0 100 100'
																preserveAspectRatio='none'
																stroke='currentColor'
															>
																<line
																	x1={0}
																	y1={100}
																	x2={100}
																	y2={0}
																	vectorEffect='non-scaling-stroke'
																/>
															</svg>
														</span>
													)}
												</>
											)}
										</RadioGroup.Option>
									))}
								</div>
							</RadioGroup>
						</div>
					</div>
					<button
						
						type='submit'
						className='mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
						onClick={()=>
						dispatch(addToCart({
							id:productdetail.id,
							title:productdetail.title,
							image:productdetail.image,
							price:productdetail.price
						}))}								
					>
						Add to bag
					</button>
				</div>
			</div>
		</div>
	)
}

export default Detail
