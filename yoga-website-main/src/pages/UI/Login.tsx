import { Link } from "react-router-dom";
import Input from "./Input";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="grid gap-4 px-4">
        <Input
          type="email"
          placeholder="Enter your email"
          label="Email"
          name="email"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
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
