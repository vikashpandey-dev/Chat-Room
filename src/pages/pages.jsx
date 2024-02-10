import React from "react";
import Contact from "../component/leftpage/Contact";
import Chat from "../component/chats/Chat";
import Sidepage from "../component/Sidepage";
import "./pages.css"; // Import your CSS file for styling

function Pages() {
  return (
    <>
      <div className="top w-full h-10 p-0  mr=5">
        <div className="flex gap-2  items-center h-full bgwhitesmole">
          <div className=" items-center pl110">
            {/* WhatsApp icon */}
          </div>
          <div className="">
            <p className="text-sm mb-0 font-medium">WhatsApp</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-fit">
        <div className="w-20 bgwhitesmole h-auto">
          <Sidepage />
        </div>
        <div className="w-full md:w-1/3">
          <Contact />
        </div>
        <div className="w-full h-full chat-container hidden md:block">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Pages;
