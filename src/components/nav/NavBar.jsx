import React, { useEffect, useState } from "react"
import style from "./NavBar.module.css"
import khmerflag from "../../img/kmerflag.jpg"
import logo from "../../img/shop.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import Cart from "../Cart"
import { useDispatch, useSelector } from "react-redux"
import { resetCart } from "../../redux/CartReducer"
import { useNavigate } from "react-router-dom"
const NavBar = () => {
	const products = useSelector((state) => state.cart.products)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const backHome = () => {
		navigate("/")
	}
	return (
		<div>
			<div className=' flex justify-between  h-20 container xl:max-w-screen-xl mx-auto'>
				<div className='flag flex text-center self-center '>
					<img
						src={khmerflag}
						alt='khmer flag'
						className={style.khmerflag}
					/>
					<span className='uppercase self-center '>cambodia</span>
				</div>
				<div className='logo self-center flex'>
					<img
						onClick={backHome}
						src={logo}
						alt="store's logo"
						width={50}
						className='cursor-pointer '
					/>
					<h3
						className={style.storeTitle}
						onClick={backHome}
					>
						Setha store
					</h3>
				</div>
				<div className='right self-center flex'>
					<label htmlFor='modal-3'>
						<AiOutlineShoppingCart className='text-4xl mr-3 text-slate-700 cursor-pointer hover:text-orange-500' />
					</label>
					{/* <span >
						<AiOutlineShoppingCart
							className='text-4xl mr-3 text-slate-700 '
							
						/>
					</span> */}

					<span
						className='bg-emerald-500 rounded-full p-2 h-3 w-3 relative -top-1 -left-6 text-xs opacity-80 flex justify-center items-center
					cursor-pointer hover:bg-error text-stone-100'
					>
						{products.length}
					</span>

					<span className='ml-2'>
						<BsPersonLinesFill className='text-4xl  text-slate-700 cursor-pointer  hover:text-orange-500' />
					</span>
				</div>
			</div>
			<div className='navbar2 flex justify-center drop-shadow-md border-b-2'>
				<div>
					<ul className=' mt-0 mr-6 space-x-8 flex p-3 '>
						<li className=' hover:text-orange-500'>
							<a
								href='#'
								onClick={backHome}
							>
								Home
							</a>
						</li>
						<li className=' hover:text-orange-500'>
							<a href='#'>Categories</a>
						</li>
						<li className=' hover:text-orange-500'>
							<a href='#'>New Arrival</a>
						</li>
						<li className=' hover:text-orange-500'>
							<a href='#'>About us</a>
						</li>
					</ul>
				</div>
			</div>
			{/* modal for cart */}

			<input
				className='modal-state'
				id='modal-3'
				type='checkbox'
			/>
			<div className='modal flex justify-end '>
				<label className='modal-overlay'></label>
				<div className='modal-content flex flex-col gap-5 h-full w-[50%]'>
					<label
						htmlFor='modal-3'
						className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
					>
						✕
					</label>
					<h2 className='text-xl'>You have {products.length} in cart</h2>
					<Cart />

					<div className='flex gap-3 '>
						<button
							className='btn btn-error btn-block'
							onClick={() => {
								dispatch(resetCart)
							}}
						>
							Delete
						</button>
						<button className='btn btn-block '>Close</button>
					</div>
				</div>
			</div>
			{/* end of modal */}
		</div>
	)
}

export default NavBar
