import React, { useEffect, useState } from "react"
import "./Card.css"
import img from "./../../img/model.jpg"
import { Link } from "react-router-dom"

const Card = () => {
	const [products, setProducts] = useState([
		{
			id: Number,
			title: String,
			price: Number,
			category: String,
			description: String,
			image: String,
		},
	])
	const [loading, setLoading] = useState(false)
	const getProducts = async () => {
		setLoading(true)
		const res = await fetch("https://fakestoreapi.com/products")
		return res.json()
	}
	useEffect(() => {
		// fetch("https://fakestoreapi.com/products")
		// 	.then((res) => res.json())
		// 	.then((json) => setProducts(json))
		getProducts()
			.then((res) => {
				setProducts(res)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	return (
		<>
			{products &&
				products.map((p) => (
					<div
						key={p.id}
						className='mb-5'
					>
						{/* display when it's loading */}
						{loading ? (
							<div className='spinner '>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						) : (
							<Link to={`/detail/${p.id}`}>
								<div className='card drop-shadow-lg bg-white  overflow-hidden '>
									<div className='img-container flex justify-center '>
										<span className='mark'>80% off</span>
										<img
											src={p.image}
											alt='model'
											className='img self-center'
										/>
									</div>
									<p className=' text-xs text-zinc-700 text-center p-2'>
										{p.title}
									</p>
									<p className='text-xs text-center pb-5 text-zinc-500'>
										{"$" + p.price}
									</p>
								</div>
							</Link>
						)}
					</div>
				))}
		</>
	)
}

export default Card
