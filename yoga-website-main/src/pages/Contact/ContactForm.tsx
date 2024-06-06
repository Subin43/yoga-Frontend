import React, { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variant"; // Assuming you have a variant file
import Button from "../UI/Button";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSend = async () => {
    console.log("Submit button clicked");
    try {
      // Check if name, email, subject, and message are empty
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        alert("Please fill in all fields");
        return;
      }

      // Check if name contains only letters and spaces
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(formData.name)) {
        alert("Please enter a valid name (letters and spaces only)");
        return;
      }

      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Check if subject is alphanumeric
      if (!/^[a-zA-Z0-9\s]+$/.test(formData.subject)) {
        alert("Subject must be alphanumeric.");
        return;
      }

      // Check if message is alphanumeric
      if (!/^[a-zA-Z0-9\s]+$/.test(formData.message)) {
        alert("Message must be alphanumeric.");
        return;
      }

      const response = await axios.post(
        "https://chatbot-api-backend.onrender.com/email/auth",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", response.data);
      alert("Request sent successfully to the email");
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="flex justify-center">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full m-10 md:w-[400px] flex flex-col shadow-lg border border-gray-200 rounded-xl bg-white transition duration-250 hover:scale-105 p-12"
      >
        <h3>Please fill out this form to get in touch with us.</h3>
        <div className="flex flex-col space-y-2 mt-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <Button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md" onClick={handleSend}>
            Send
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
