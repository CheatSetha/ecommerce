import React from "react"
import Banner from "../components/banner/Banner"
import Card from "../components/Card/Card"


import SideNav from "../components/SideNav/SideNav"

const Home = () => {
	return (
		<div className='bg-gray-100'>
			
			<Banner />
			<div className='max-w-screen-xl mx-auto flex justify-between'>
				<div className='columns-4 mt-5 mx-auto'>
					<Card />
				</div>
				<div className=' columns-1 pt-3'>
					<SideNav />
				</div>
			</div>
		</div>
	)
}

export default Home
