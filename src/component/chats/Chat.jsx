import React, { useEffect, useState, useRef } from "react";
import Chattop from "./Chattop";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useSelector, useDispatch } from "react-redux";
import { Allusers, Message } from "../../redux/auth/auth-action";
import { GetMessahe } from "../../redux/auth/auth-action";
import { FaPlus } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import { io } from "socket.io-client";
import "./chat.css";
import { Howl } from "howler"; // Import Howl from 'howler' library
import whatsappNotificationSound from "./whatsapp.mp3";
function Chat() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const[onlineuser,setOnlineuser]=useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef(io("http://localhost:5000", { withCredentials: true }));
  const chatBoxRef = useRef(null);
  let users = useSelector((state) => state.auth_reducer.SingleUser);
  const usermessage = useSelector((state) => state.auth_reducer.usermessage);
  useEffect(() => {
    // Scroll to the end of the chat box when messages change
    scrollToBottom();
  }, [usermessage]);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // take userid and socket id
    let currentuser = {
      _id: localStorage.getItem("id"),
    };
    // socket.current.emit("addUser",currentuser)
  }, []);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      const payload2 = {
        senderid: data.senderId,
        receiverid: data.receiverId,
      };
      dispatch(GetMessahe(payload2));
      setArrivalMessage({
        sender: data.mobile,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", localStorage.getItem("id"));
    
    socket.current.on("getMessage",(message)=>{
    })
  }, []);

  useEffect(() => {
    const payload = {
      id: localStorage.getItem("id"),
    };
    dispatch(Allusers(payload));
  }, [dispatch]);

  const handleKeyPress = async (e) => {
    
    if (e.key === "Enter") {
      const sound = new Howl({
        src: [whatsappNotificationSound],
      });

      sound.play();
      if (!message) return;
      const payload = {
        sender: localStorage.getItem("mobile"),
        senderid: localStorage.getItem("id"),
        receiver: users.mobile,
        receiverid: users._id,
        message: message,
        type: "text",
      };
      socket.current.emit("sendMessage", {
        senderId: localStorage.getItem("id"),
        receiverId: users._id,
        text: message,
        mobile: localStorage.getItem("mobile"),
      });
      await dispatch(Message(payload));
      const payload2 = {
        senderid: localStorage.getItem("id"),
        receiverid: users._id,
      };
      dispatch(GetMessahe(payload2));
      setMessage("");
    }
  };
  const gettimes=(teims)=>{
    let date=new Date(teims)
    let hour=date.getHours()
    let getminute=date.getMinutes()
    return `${hour}:${getminute}`
  }
  return (
    <>
      <div className="">
        <div className="chattopp ">
          <Chattop socket={socket}/>
        </div>

        <div className="w-full h-full setbgimahe setscroll">
          <div className="p-3"></div>
          {usermessage.map((val, index) => (
            <div
              ref={chatBoxRef}
              className={
                val.sender == localStorage.getItem("mobile")
                  ? "w-full flex justify-end"
                  : "w-full flex justify-start"
              }
              key={index}
            >
              <p
                className={
                  val.sender == localStorage.getItem("mobile")
                    ? " bg075E54  max30 mr-12 p-1 rounded-br-lg"
                    : " ffff max30 ml-12 p-1  leftradius"
                }
              >
                {val.message} <span className="text-xs mt-1">{ gettimes(val.createdAt)}</span>
              </p>
            </div>
          ))}
        </div>
        <div class="flex items-center  w-full   ">
          <div className="flex">
            <div className="cursor-pointer w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md ">
              <BsEmojiSmile className="w-h h-6" />
            </div>

            <div className=" cursor-pointer w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md ml-3 mr-3">
              <FaPlus className="w-h h-6" />
            </div>
          </div>
          <div className=" w-full">
            <input
              type="text"
              value={message}
              class="px-4 py-3 w-full border-none  rounded-lg  focus:outline-none "
              placeholder="Enter your text"
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="  w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer ml-3 mr-3">
            <KeyboardVoiceIcon className="w-h h-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
