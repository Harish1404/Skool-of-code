import React, { useState } from "react";
import Chatbot from "./Chatbot";

const AITutorSection = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        position: "fixed",
        bottom: "0",
        right: "0",
        zIndex: 100,  
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <div
          style={{ display: isChatVisible ? "flex" : "none" }}
          name="chat"
        >
          <Chatbot />
        </div>
        <button
          style={{
            background: "transparent",
            borderRadius: "50%",
            border: "none",
            marginBottom: "20px",
            textAlign: "center",
            zIndex: 100,
          }}
          name="chat"
          onClick={toggleChat}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/047/178/831/small/3d-cartoon-character-isolated-free-png.png"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
            alt="Chatbot Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default AITutorSection;
