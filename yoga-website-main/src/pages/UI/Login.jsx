import { Link } from "react-router-dom";
import React from "react";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="grid gap-4 px-4">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center md:gap-8 mt-4">
          <button className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-full w-full md:w-auto">
            Login
          </button>
          <Link
            to="/register"
            className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-full w-full md:w-auto text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
