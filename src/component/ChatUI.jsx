// src/components/ChatUI.js
import React, { useState } from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';

const ChatUI = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`w-full lg:w-1/4 bg-gray-800 p-4 text-white ${showContacts ? 'block' : 'hidden'}`}>
        <h1 className="text-2xl font-bold mb-4">Contacts</h1>
        {/* Add your contacts here */}
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 bg-blue-500 rounded-full mr-3"></div>
          <p className="text-lg">Contact 1</p>
        </div>
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 bg-green-500 rounded-full mr-3"></div>
          <p className="text-lg">Contact 2</p>
        </div>
        {/* Add more contacts as needed */}
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="bg-gray-700 text-white p-4 flex items-center justify-between lg:w-1/4 lg:fixed lg:h-full">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-blue-500 rounded-full mr-3"></div>
            <p className="text-xl font-bold">Contact Name</p>
          </div>
          <div>
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              {showContacts ? 'Hide Contacts' : 'Show Contacts'}
            </button>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-scroll p-4 bg-gray-200">
          {/* Messages go here */}
          <div className="mb-4">
            <div className="bg-blue-500 text-white p-3 rounded-md inline-block">
              Hello, how are you?
            </div>
          </div>
          <div className="mb-4 text-right">
            <div className="bg-gray-300 p-3 rounded-md inline-block">
              I'm good, thank you!
            </div>
          </div>
          {/* Add more messages as needed */}
        </div>

        {/* Message input */}
        <div className="bg-gray-300 p-4 flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-md p-3 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full ml-3">
            <RiSendPlane2Line size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
