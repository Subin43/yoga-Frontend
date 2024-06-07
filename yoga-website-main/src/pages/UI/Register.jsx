import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import React from "react";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const { user_name, password, confirm_password } = formData;

    try {
      if (password === confirm_password) {
        const response = await axios.post("/", {
          user_name,
          password,
          confirm_password,
        });
        setError(false);
        console.log(response.status);
        navigate("/login");
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label htmlFor="user_name" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="user_name"
            name="user_name"
            placeholder="Enter your email"
            className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={formData.user_name}
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="confirm_password" className="text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm password"
            className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={formData.confirm_password}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            required
            name="checkbox"
            autoComplete="new-password"
            className="p-4"
          />
          <label htmlFor="checkbox" className="text-sm">
            Agree to the terms and conditions
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 px-4 py-2 rounded-full mx-auto"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
