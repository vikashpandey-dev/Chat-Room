import React, { useState } from "react";
import "./contact.css";
import { useSelector } from "react-redux";
import { getsingle, GetMessahe } from "../../redux/auth/auth-action";
import { CiChat1 } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";


function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUpdateProfileClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  let users = useSelector((state) => state.auth_reducer.alluser);
  let singleuser = useSelector((state) => state.auth_reducer.SingleUser);

  let loginuser = useSelector((state) => state.auth_reducer.data);
  console.log(loginuser, "loginuserloginuserloginuser");

  const SingleUser = async (val) => {
    const payload = {
      id: val._id,
    };
    let data = await dispatch(getsingle(payload));
    console.log(data.user.mobile, "datadata");
    const payload2 = {
      senderid: localStorage.getItem("id"),
      receiverid: data.user._id,
    };
    await dispatch(GetMessahe(payload2));
  };
 let baseurls='http://localhost:3000/upload/'

  return (
    <>
      <div className="">
        <div className="flex w-full items-center justify-between px-4 my-2">
          <div>
            <h3 className="text-xl font-medium">Chats</h3>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md">
              <CiChat1 className="w-5 h-5" />
            </div>
            <div className="w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md">
              <IoFilterOutline className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="px-4 my-2 relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="pl-8 pr-4 py-1 w-full  rounded-md focus:outline-none setinput"
          />
          <CiSearch className="  top-1/2 transform -translate-y-1/2 text-gray-500 absolute left-7" />
        </div>
        <div className="mt-4 setscroller mx-1 px-1 ">
          {users.map((val, index) => (
            <div
              className="w-full flex pt-1 pb-1 cursor-pointer px-2 sethour gap-3 "
              key={index}
              onClick={() => SingleUser(val)}
            >
              <div className="rounded-full  flex justify-center items-center">
                {val.image?  <img
                  className="rounded-full w-12 h-12 setborder"
                  src={`${baseurls}${val.image}`}
                  alt=""
                />:
               <>
               <div className="flex items-center w-12 h-12 rounded-full bg-e1e1e1 backgrounddadada justify-center">
               <FaUser className="rounded-full w-6 h-6 colora2a2a2 "/>
               </div>
               </>
                }
              
              </div>
              <div className="w-3/4  flex flex-col">
                <div className="flex justify-between">
                  <div className="font-normal  my-1">
                    <h1 className="text-lg pb-1">{val.name}</h1>
                    <p className="text-sm lingheight">happy new year brother</p>
                  </div>

                  {/* <div className="text-sm pr-1 mt-2">{val.time}</div> */}
                </div>
                <div className="">
                  {/* <span className="text-sm font-normal">{val.lastmsg}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
