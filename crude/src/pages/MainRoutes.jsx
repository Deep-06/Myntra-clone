import React from "react";
import {Route, Routes} from "react-router-dom";
import { Admin } from "./Admin";
import Login from "./Login"
import EditProducts from "./EditProducts";
import SingleProduct from "./SingleProduct";
import PrivateRoute from "../components/PrivateRoute";
import HomePage from "./Homepage";


export const MainRoutes =() => {

return (
<Routes>

<Route path="/" element={<HomePage />} />

<Route path="/admin" element={
<PrivateRoute>
<Admin/>
</PrivateRoute>
} />

<Route path="/login" element={<Login/>} />

<Route path="/edit/:id" element={
<PrivateRoute>
<EditProducts/>
</PrivateRoute>
}/>

<Route path="/view/:id" element={
<PrivateRoute>
<SingleProduct/>
</PrivateRoute>
}/>

<Route path="*" element={<h2>404 Page not found!</h2>}/> 

</Routes>
);
};