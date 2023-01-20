import React, { useEffect, useState } from "react"
import { MdOutlineCancel } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../redux/CartReducer"
const Cart = () => {
	const [cart, setCart] = useState([{}])
	const products = useSelector((state) => state.cart.products)
	const dispatch = useDispatch()
	return (
		<div>
			{products?.map((item) => (
				<div className='bg-white rounded-lg h-40 mt-2 p-2 flex shadow-lg overflow-clip'>
					<img
						src={item.image}
						className='cursor-pointer h-full w-20 '
					/>
					
					<div className="pl-3">
						<h2 className='text-start'>{item.title}</h2>

						<div className='font-semibold'>${item.price}</div>
					</div>
					<div
						className='text-rose-600 text-3xl fixed right-7 '
						onClick={() => dispatch(removeItem(item.id))}
					>
						<MdOutlineCancel />
					</div>
				</div>
			))}
		</div>
	)
}

export default Cart
