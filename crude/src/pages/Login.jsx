import React,{useState} from 'react'
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {login} from "../Redux/Authentication/action";
import {useLocation,useNavigate} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {isAuth,isError,errorMessage}=useSelector((store)=>{
    return {
      isAuth:store.authReducer.isAuth,
      isError:store.authReducer.isError,
      errorMessage: store.authReducer.errorMessage, 
    };
  },shallowEqual)

  const handleLogin=()=>{
   const userData={
    email,
    password,
   };
   //console.log(userData);
   //dispatch(login(userData));
   dispatch(login(userData)).then(() => {
    navigate(location.state, { replace: true });
   })
  };

  return (
    <DIV auth={isAuth.toString()} err={isError.toString()}>
      <h2>{isAuth ? "Login Successfull" : "Login to Continue"}</h2>
      <h3>{isError && errorMessage}</h3>
      <input  type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Email" />
      <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
      />
      <button  onClick={handleLogin}>Log In</button>
    </DIV>
  )
}

export default Login

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  h2{
    color: ${({auth})=>(auth?"green":"red")};
  }
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border: ${({err})=>err?"1px solid red" :"1px solid green"};
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;