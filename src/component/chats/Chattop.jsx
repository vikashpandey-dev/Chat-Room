import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PiVideoCameraThin } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Chattop(socket) {
  const [onlineuser,setonlineuser]=useState([])
  let users = useSelector((state) => state.auth_reducer.SingleUser);
  const toCapitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  };
  useEffect(()=>{
    console.log(socket,"socketsocketsocket")
    socket.socket.current.on("getUser", (users) => {
      setonlineuser(users)
    });
  },[socket])
  const checkOnline = () => {
    const onlineUser = onlineuser.find((user) => user.userid === users._id);
  
    if (onlineUser) {
      console.log(onlineUser.userid === users._id, "onlineUser.userid === users._id");
      return "Online";
    } else {
      return "Offline";
    }
  };
 let baseurls='http://localhost:3000/upload/'

  return (
    <>
      <div className=" h-14">
        <div className="w-full h-full">
          <div className=" flex items-center gap-2  w-full h-full justify-between px-3">
            <div className="left flex items-center h-full gap-3 ml-3">
              <div className="img flex h-full items-center  ">
                {users.image? <img
                  className="rounded-full w-10 h-10"
                  src={`${baseurls}${users.image}`}
                  alt=""
                />:<div className="flex items-center w-12 h-12 rounded-full bg-e1e1e1 backgrounddadada justify-center">
                <FaUser className="rounded-full w-6 h-6 colora2a2a2 "/>
                </div>}
                
              </div>
              <div className="text-normal font-medium tracking-tighter lineheight">
                <h1>{toCapitalize(users.name)}</h1> 
                <span className="text-xs textgreen">{checkOnline()}</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex  justify-center items-center topchaticonshadow ">
              <div className="  bhhover w-full h-full py-2.5 px-3">
                <PiVideoCameraThin className="w-5 h-5" />
              </div>
              <div className="line bg-gray-400 "></div>
              <div className=" bhhover w-full h-full py-2.5 px-3">
                <FiPhone className="w-5 h-5" />
              </div>
              </div>
              <div className="p-2 w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md"><IoSearchOutline className="w-5 h-5"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chattop;
