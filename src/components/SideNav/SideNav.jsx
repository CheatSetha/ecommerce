import React from "react"

import "./SideNav.css"

const SideNav = () => {

	return (
		<>
		<div className=' drop-shadow-xl sticky top-1 bg-white sidecontainer mt-3'>
			<h3 className='text-center font-semibold text-xl pt-2   pb-3'>Categories</h3>
		
			<ul>
		
				<li className='item drop-shadow-xl py-2 text-center border-y-2 mt-3'>electronics</li>
				<li className='item drop-shadow-xl py-2 text-center border-b-2'>jewelery</li>
				<li className='item drop-shadow-xl py-2 text-center border-b-2'>woman</li>
				<li className='item drop-shadow-xl py-2 text-center border-b-2'>men</li>
				
			</ul>
		</div>
		</>
		
	)
}

export default SideNav
