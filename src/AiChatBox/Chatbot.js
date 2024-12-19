import React, { useState } from 'react';
import './Chatbot.css'; // Create a CSS file for styling.

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate a chatbot response (replace this with an API call).
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Hello, how can I help?", sender: "bot" }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message AI Chatbox"
        />
        <button onClick={handleSend}>↑</button>
      </div>
    </div>
  );
};

export default Chatbot;
