import React, { useState } from "react";
import axios from "axios";
import { AiOutlineRobot } from "react-icons/ai"; // Importing the chatbot icon from React Icons

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSend = async () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: input },
      ]);

      try {
        const response = await axios.post(
          'https://chatbot-api-backend.onrender.com/bot',
          { message: input },
          { headers: { 'Content-Type': 'application/json' } }
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: response.data.response },
        ]);
      } catch (error) {
        console.error('Error sending message to chatbot:', error);
      }

      setInput(""); // Clear input field after sending
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-10 right-4 flex flex-col items-end mb-14 py-8" // Adjusted bottom value
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ marginTop: isHovered ? "-10px" : "0" }} // Adjusted top margin for mobile view
    >
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          isHovered ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-full max-w-xs md:max-w-md p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4 mb-4 max-h-[300px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 md:p-4 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Handle Enter key press
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
              aria-label="Type a message" // Accessibility improvement
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
              aria-label="Send message" // Accessibility improvement
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer ${
          isHovered ? "hidden" : "block"
        }`}
        onClick={() => setIsHovered(!isHovered)}
      >
        <AiOutlineRobot className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Chatbot;
