import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editProduct } from '../Redux/Products/action';

const EditProducts = () => {
  const dispatch=useDispatch();
  const { id } = useParams();
  const products = useSelector((store) => store.productsReducer.products)
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const {price,name,brand,gender,category} = products.find(el => el.id === +id);
    setPrice(price);
    setName(name);
    setBrand(brand);
    setCategory(category);
    setGender(gender);
  }, [])

  const handleEdit=()=>{
 const data={
  name,
  price,
  brand,
  category,
  gender
 }
 dispatch(editProduct(id,data))
  }

  return (
    <div>
      <h1>{id}</h1>
      <input type='number' placeholder='price' value={price}
        onChange={(e) => setPrice(+e.target.value)} />
      <input type='text' placeholder='name' value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='brand' value={brand}
        onChange={(e) => setBrand(e.target.value)} />
      <input type='text' placeholder='category' value={category}
        onChange={(e) => setCategory(e.target.value)} />
      <input type='text' placeholder='gender' value={gender}
        onChange={(e) => setGender(e.target.value)} />
      <button onClick={handleEdit}>Update</button>

    </div>
  )
}

export default EditProducts