import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFullname from "../useFullname";

export default function MessageTherapist() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [fullName, setFullName] = useFullname("fullName", "");
  const [therapist, setTherapist] = useState({
    fullName: fullName,
    id: "68155f1b807dd7ee8b217584",
    phone: "0553322112",
    Email: "s202112345@gmail.com",
    nextAppointment: "4/19/2025",
    nextPatient: "dr.majid bin afif",
    dateOfBirth: "1/1/2000",
  });

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      senderId: "68155f1b807dd7ee8b217584",
      receiverId: "661f89124c8e2b6c1d8f4777",
      text: newMessage,
    };

    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const savedMessage = await res.json();

      setMessages((prev) => [...prev, savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${fullName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setTherapist({
        nextAppointment: data.nextAppointment,
        nextPatient: data.therapist,
        id: data._id,
      });
      console.log(therapist.id);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:5000/api/messages/${therapist.id}/661f89124c8e2b6c1d8f4777`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMessages(data);
    })();
  }, [therapist.id]);
  console.log(messages);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center">
        <button
          onClick={() => window.history.back()}
          className="text-gray-500 hover:text-gray-700 mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">
          Chat with
          {" DR." + therapist.nextPatient}
        </h1>
      </header>

      {/* Chat messages */}
      {
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.senderId === "68155f1b807dd7ee8b217584"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs text-sm shadow-md ${
                  msg.senderId === "68155f1b807dd7ee8b217584"
                    ? "bg-blue-100 text-gray-800 rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      }
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
