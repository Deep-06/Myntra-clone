import React, { useState } from 'react'
import {styled} from "styled-components"
import {useDispatch} from "react-redux"
import { addProduct } from '../Redux/Products/action';
const initialState={
  name:"",
  image:"",
  brand:"",
  price:0,
  category:"",
  gender:"",
};
export const Admin = () => {
const [data,setData]=useState(initialState);
const dispatch=useDispatch();
const handleChange=(e)=>{
const {name,value}=e.target;
setData(prev=>{
  return {...prev, [name]: name==="price" ? +value : value};
})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(data);
  dispatch(addProduct(data));
  setData(initialState);
}
  return (
    <DIV>
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input type="text" placeholder="Name" 
      name="name"
      value={data.name}
      onChange={handleChange}/>
      <input type="text" placeholder="Image" 
      name="image"
      value={data.image}
      onChange={handleChange}/>
      <input type="text" placeholder="Brand" 
      name="brand"
      value={data.brand}
      onChange={handleChange}/>
      <input type="number" placeholder="Price" 
      name="price"
      value={data.price}
      onChange={handleChange}/>

      <select name="gender" value={data.gender} onChange={handleChange}>
      <option value="">Select gender</option>
      <option value="male">Men</option>
      <option value="female">Women</option>
      <option value="kids">Kids</option>
      </select>

     <select name="category" value={data.category} onChange={handleChange}>
     <option value="">Select Category</option>
      <option value="top-wear">Top Wear</option>
      <option value="botton-wear">Bottom wear</option>
      <option value="foot-wear">Foot Wear</option>
     </select>

     <button type="submit">Add Product</button>

    </form> 
    </DIV>
  )
}

const DIV = styled.div`

width: 400px;
margin: auto;
border: 1px solid gray;
padding: 40px;

form{
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
}

input,select{
  height:40px;
  width:100%;
  font-size:larger;
}

button{
  width:50%;
  height:35px;
  border:none;
  cursor:pointer;
}
`;

//fdghefhjkj