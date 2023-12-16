import React from "react";
import { Link } from "react-router-dom";
import {styled} from "styled-components"
export const Navbar = () => {

return (
 <NAVWRAPPER>

<h1>Product List</h1>
<Link to={"/"}>Home</Link>
<Link to={"/admin"}>Admin</Link>
<Link to={"/login"}>Login</Link>

 </NAVWRAPPER>

);

};

const NAVWRAPPER = styled.div`
display:flex;
align-items:center;
gap:25px;
background-color:gray;

`;