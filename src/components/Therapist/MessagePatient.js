// src/components/Therapist/MessagePatient.js

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MessagePatient() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hi Ahmed, how are you feeling today?", sender: "therapist" },
    { text: "Hi doctor, I’m feeling better, thank you!", sender: "patient" },
    {
      text: "Great to hear! Let me know if anything comes up.",
      sender: "therapist",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sender: "therapist" }]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center">
        <button
          onClick={() => navigate("/therapist/patients")}
          className="text-gray-500 hover:text-gray-700 mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Chat with Ahmed Naji</h1>
      </header>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "therapist" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs text-sm shadow-md ${
                msg.sender === "therapist"
                  ? "bg-blue-100 text-gray-800 rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="border-t bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded mr-2 text-sm"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
