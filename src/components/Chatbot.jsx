import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false); // State to toggle chatbot visibility
  const [isLoading, setIsLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0); // Track how many times the user has asked for the code

  const API_KEY = "AIzaSyAyG07F4HCjzCgdcGfOoSv9F8w-BxNL3vU"; // 🔴 Replace with your Gemini API key

  const generateKidFriendlyPrompt = (userInput) => {
    return `You are a magical Python wizard at Python Playland! 🌟 Your job is to tell fun stories about Python and help kids discover its amazing powers. Here’s how you should respond:

    WEBSITE CONTEXT:
    - You’re part of Python Playland, a land where kids explore and learn the magic of Python programming.
    - The website has lessons on: Print Statements, Variables, User Input, If Statements, and Loops.
    - Kids can practice Python coding through fun and engaging exercises!

    STORYTELLING STYLE:
    - Respond with a fun, interactive story or adventure. Make learning Python feel like a grand journey! 
    - Use playful language, emojis, and surprises to make every response exciting! 🎉
    - When asked for code, say: "I can't give you the full code just yet, but here's a hint: let's work through it together step-by-step! 💡"

    IF THE USER ASKS FOR CODE:
    - If the user asks for code, don’t give the entire code immediately. Instead, guide them with hints, small steps, and the adventure of problem-solving! 🌱
    - If the user asks for the full code a second time, say: “You’ve earned it, here’s the code you’ve been looking for! 🎉🎉”

    For example, if they ask "Can you give me the code?", you can say:
    “Hmm, let’s break it down! First, we need to start by learning about the 'print' statement. Try using it like this: print('Hello, world!') 🌟.”

    If the user asks again for the full code, that’s when you give it in full!

    Question: ${userInput}`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);
    setRequestCount(requestCount + 1); // Increment request count

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: generateKidFriendlyPrompt(input) }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botMessage = {
        role: "assistant",
        content: data.candidates?.[0]?.content?.parts?.[0]?.text || "Oops! Let’s try that again! 🎮",
      };

      // Check if the user asked for the full code more than once
      if (requestCount >= 2) {
        botMessage.content = "Here’s the full code you’ve been asking for: \n<insert full Python code here>";
      }

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        role: "assistant",
        content: "Uh-oh! My magic wand needs recharging! 🪄 Let's try again! 🌟",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      {/* Ask Me Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "50px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {isVisible ? "Close Chat" : "Ask Me"}
      </button>

      {/* Chatbot Container */}
      {isVisible && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80vh",
            width: "100%",
            maxWidth: "500px",
            margin: "auto",
            background: "linear-gradient(to bottom right, rgb(52, 163, 233), rgb(118, 56, 243))",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.15)",
            borderRadius: "20px",
            fontFamily: "Comic Sans MS, cursive",
            overflow: "hidden"
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: "#007bff",
              color: "white",
              padding: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            Shinchan (AI)
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.role === "user" ? "#007bff" : "#e0e0e0",
                  color: msg.role === "user" ? "white" : "black",
                  padding: "10px",
                  borderRadius: "10px",
                  maxWidth: "70%",
                }}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "10px",
                  color: "#ff9800",
                  fontSize: "16px",
                }}
              >
                🤔 Thinking...
              </div>
            )}
          </div>

          {/* Input Field */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ccc",
            }}
          >
            <input
              type="text"
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
