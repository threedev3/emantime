import React, { useState } from "react";

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          height="32px"
          width="32px"
          role="img"
          alt="Chat icon"
          className="h-7 w-7 fill-white tawk-min-chat-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
          ></path>
        </svg>
      </button>
      {isChatOpen && <ChatWindow toggleChatWindow={toggleChatWindow} />}
    </>
  );
};

const ChatWindow = ({ toggleChatWindow }) => {
  return (
    <div className="fixed bottom-14 right-4 w-80 h-96 bg-white rounded-lg shadow-lg z-50">
      <div className="flex justify-between items-center p-2 bg-green-500 text-white rounded-t-lg">
        <span>Chat</span>
        <button onClick={toggleChatWindow}>
          <svg
            className="h-5 w-5 fill-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a1 1 0 01-.707-1.707l3-3a1 1 0 111.414 1.414L11.414 8H4a1 1 0 010-2h7.414l1.293-1.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 6.586V14a1 1 0 11-2 0V6.586L6.293 8.293a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l1.293 1.293A1 1 0 014 4h7.414l1.293-1.293A1 1 0 0114.414 2l-3 3A1 1 0 0110 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-4 h-full overflow-y-auto">
        {/* Chat content goes here */}
        <p>Welcome to our chat service! How can we help you?</p>
      </div>
    </div>
  );
};

export default ChatIcon;
