import React, { useState } from "react";
import "./RegisterForm.css";
import { useSelector, useDispatch } from "react-redux";
import {signup,toggleregister,toggleopen,SigninWithPassword} from "../redux/auth/auth-action"
function Login() {
  const dispatch = useDispatch();
  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")

const handleSubmit= async(e)=>{
    e.preventDefault()
   const payload={

    mobile:mobile,
    password:password,
   }
 try{
    let record=await dispatch(SigninWithPassword(payload))
    if(record.user){
      const payload1={
        toggle:false
    }
     dispatch(toggleopen(payload1))
alert("Login")
    }
  //  if( record.response.status==409){
  //   alert("User Allready Register With Us!")
  //  }

 }catch(err){
    console.log(err,"errrrrrrrrrrrrr")
 }
}
const handleRegister=()=>{
  const payload1={
    toggle:false
}
 dispatch(toggleopen(payload1))
  const payload={
    toggleregister:true
  }
  dispatch(toggleregister(payload))
}
 useSelector((state) => state.auth_reducer);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-400 to-indigo-500">
      <div className="bg-white p-8 shadow-md rounded-md w-80 transform -translate-y-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="number" className="block font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 register-form-input"
              onChange={(e)=>setMobile(e.target.value)}
           />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 register-form-input"
              onChange={(e)=>setPassword(e.target.value)}
       />
          </div>
          <div >
            <button onClick={handleSubmit}
              type="submit"
              className="w-full py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
                
              Login
            </button>

          </div>
          <div className="flex justify-center items-center" onClick={handleRegister} ><a href="#" className="nonestyle">Register Here</a></div>

        </form>
      </div>
    </div>
  );
}

export default Login;
