import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
  const navigate = useNavigate();

  const handleBookDemo = async () => {
    try {
      if (!name.trim() || !email.trim() || !phone) {
        alert("Please fill in all fields");
        return;
      }

      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters and spaces only)");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      if (isNaN(phone) || phone.toString().length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }

      const payload = { name, email, phone };
      console.log("Payload:", payload);

      const response = await axios.post(
        "https://chatbot-api-backend.onrender.com/email/auth",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", response.data);
      alert("Request sent successfully");
      navigate("/demo");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message:", error.message);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter your name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone No:
        </label>
        <input
          type="number"
          placeholder="Enter your phone no.."
          value={phone === undefined ? "" : phone}
          onChange={(e) =>
            setPhone(e.target.value ? parseInt(e.target.value) : undefined)
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleBookDemo}
        >
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default Form;
