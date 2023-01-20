import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
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
	
	console.log(id)
    console.log(productdetail.title)
	return <div>
        <div>{productdetail.title}</div>
        <div>{productdetail.price}</div>
        <div>{productdetail.category}</div>
        <div>{productdetail.description}</div>
        <img src={productdetail.image} alt="" />
    </div>
}

export default ProductDetail
