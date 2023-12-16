import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
const [searchParams,setSearchParams]=useSearchParams();
const [gender,setGender] = useState(searchParams.getAll("gender") || []);
const [category, setCategory] = useState(searchParams.getAll("category") || []);
const [order,setOrder]=useState(searchParams.get("order") || "");

const handlegender=(e)=>{
const {value} = e.target;
let newGender=[...gender];

if(newGender.includes(value)){
  newGender = newGender.filter((el) => el !== value)
}else{
    newGender.push(value);
}
setGender(newGender);

};

const handleCategory=(e)=>{
const {value} = e.target;
let newCategory=[...category];

if(newCategory.includes(value)){
  newCategory = newCategory.filter((el) => el !== value)
}else{
    newCategory.push(value);
}
setCategory(newCategory);

};

const handleOrder = (e) =>{
    const {value}= e.target;
setOrder(value);
}

useEffect(()=>{
let params={
    gender,
    category,
};
order && (params.order=order);

setSearchParams(params);

}, [gender,category,order])

  return (
    <div>
        <h3>Filter by gender</h3>
        <div>
            <input type="checkbox" value={"male"}
            onChange={handlegender} checked={gender.includes("male")}/>
            <label >Men</label>
        </div>
        <div>
            <input type="checkbox" value={"female"} 
                onChange={handlegender} checked={gender.includes("female")}
            />
            <label >Female</label>
        </div>
        <div>
            <input type="checkbox" value={"kids"} 
                onChange={handlegender} checked={gender.includes("kids")}
            />
            <label >Kids</label>
        </div>

        <h3>Filter by Category</h3>
        <div>
            <input type="checkbox" value={"topwear"} 
                onChange={handleCategory} checked={category.includes("topwear")}
            />
            <label >Top-wear</label>
        </div>
        <div>
            <input type="checkbox" value={"bottomwear"} 
                onChange={handleCategory} checked={category.includes("bottomwear")}
            />
            <label >Bottom-wear</label>
        </div>
        <div>
            <input type="checkbox" value={"footwear"} 
                onChange={handleCategory} checked={category.includes("footwear")}
            />
            <label >Foot-wear</label>
        </div>

        <h3>Sort by price</h3>
        <div onChange={handleOrder}>
            <input type="radio" name="order" value={"asc"} 
                 defaultChecked={order === "asc"}
            />
            <label >Low to High</label>
        
        
            <input type="radio" name="order" value={"desc"} 
                defaultChecked={order === "desc"}
            />
            <label >High to Low</label>

            <input type="radio" name="order" value={""} 
                defaultChecked={order === ""}
            />
            <label >Reset</label>
            </div>
    </div>
  )
}

export default Sidebar