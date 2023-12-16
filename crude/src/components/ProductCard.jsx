import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const ProductCard = ({id,name, image,
    brand, category, gender,price
}) => {

const isAuth=useSelector((store)=>store.authReducer.isAuth)
return (

<div>
<Link to={`/view/${id}`}>
<img src={image} alt={"Product_image"} style={{width:"100%"}}/>

</Link>

<h1>{name}</h1>

<h3>Price: {price}</h3>

<p>Brand: {brand}</p>

<p>Category: {category}</p>

<p>Gender: {gender}</p>
{isAuth && (
    <button>
    <Link to={`/edit/${id}`}>Edit</Link>
</button>
)}

</div>

);

};