import axios from "axios"

import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, 
    PRODUCT_FAILURE, PRODUCT_REQUEST, } from "./actionType";

export const addProduct= (newProduct) => (dispatch) => {

dispatch({ type: PRODUCT_REQUEST });

axios

.post("http://localhost:8888/products", newProduct)

.then((res) => {

dispatch({ type: POST_PRODUCT_SUCCESS });
})
.catch((err) => {

dispatch({ type: PRODUCT_FAILURE }); });

};

export const getProduct = (paramObj) => (dispatch) => { 
    dispatch({ type: PRODUCT_REQUEST });

axios
.get("http://localhost:8080/products",paramObj)
.then((res) => {
dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
 })
.catch((err) => {
dispatch({ type: PRODUCT_FAILURE }); 
});


};

export const editProduct =(id,data)=>(dispatch)=>{
dispatch({type:PRODUCT_REQUEST});
axios.patch(`http://localhost:8080/products/${id}`,data)
.then((res)=>{
dispatch({type:PATCH_PRODUCT_SUCCESS})
})
.catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
})
}

//ygjhgj