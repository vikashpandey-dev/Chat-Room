import React, { useState } from "react";
import "./RegisterForm.css";
import { useSelector, useDispatch } from "react-redux";
import {signup,toggleopen,toggleregister} from "../redux/auth/auth-action"
function RegisterForm() {
  const dispatch = useDispatch();
  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")

const handleSubmit= async(e)=>{
    e.preventDefault()
   const payload={
    name:name,
    mobile:mobile,
    password:password,
   }
 try{
    let record=await dispatch(signup(payload))
    if(record.user){
alert("Register")
    }
   if( record.response.status==409){
    alert("User Allready Register With Us!")
   }
 }catch(err){
    console.log(err,"errrrrrrrrrrrrr")
 }
}
const handlelogin=async(e)=>{
    e.preventDefault()
    const payload1={
      toggleregister:false
    }
    dispatch(toggleregister(payload1))
    const payload={
        toggle:true
    }
await dispatch(toggleopen(payload))
}
let loginuser = useSelector((state) => state.auth_reducer);
console.log(loginuser,"loginuserloginuser")
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-400 to-indigo-500">
      <div className="bg-white p-8 shadow-md rounded-md w-80 transform -translate-y-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 register-form-input"
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
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
                
              Register
            </button>

          </div>
          <div className="flex justify-center items-center" onClick={handlelogin} ><a href="#" className="nonestyle">Login Here</a></div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
