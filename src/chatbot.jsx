import React, { useState } from "react";
import locations from "./Location"; // ✅ matches your file name
import { askGemini } from "./geminiService"; // Gemini API helper

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I’m your OAU Navigator Assistant. Ask me about any location on campus.",
    },
  ]);
  const [input, setInput] = useState("");

  // ✅ helper to check if user question matches any location
  const findLocation = (query) => {
    const lowerQuery = query.toLowerCase();
    return locations.find((loc) => lowerQuery.includes(loc.name.toLowerCase()));
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // ✅ Step 1: check if input matches a known location
    const locationMatch = findLocation(input);

    if (locationMatch) {
      const reply = (
        <div>
          <p>
            📍 <b>{locationMatch.name}</b>
          </p>
          <p>{locationMatch.description}</p>
          <p>
            Coordinates: ({locationMatch.lat}, {locationMatch.lng})
          </p>
          {locationMatch.image && (
            <img
              src={locationMatch.image}
              alt={locationMatch.name}
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            />
          )}
        </div>
      );

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setInput("");
      return;
    }

    // ✅ Step 2: otherwise, fallback to Gemini
    try {
      const botReply = await askGemini(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Sorry, I couldn’t fetch a reply." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="chatbot-page">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about OAU campus..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
