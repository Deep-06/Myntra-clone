
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getProduct} from "../Redux/Products/action"
import { ProductCard } from "./ProductCard";
import {styled} from "styled-components";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
const dispatch=useDispatch();
const products = useSelector(store => store.productsReducer.products);
const [searchParams]=useSearchParams();

const paramObj = {
  params:{
    gender: searchParams.getAll("gender"),
    _category: searchParams.getAll("category"),
    _sort: searchParams.get("order") && "price",
     _order: searchParams.get("order"),
     //limit
     //page
  },
};

  useEffect(()=>{
    dispatch(getProduct(paramObj));
  }, [searchParams])

  return (
    <DIV>
    {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id} {...el}/>
      })}
    </DIV>
  )
}

export default ProductList;

const DIV = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:10px;
`;
