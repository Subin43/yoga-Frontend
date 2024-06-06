import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { icons } from "../../data/data";
import logo from './assets/logo background.png'; // Ensure this is a PNG with a transparent background

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 text-white bg-green-600 border-b border-gray-100 z-50">
        <div className="flex items-center">
          <img 
            className="w-16 h-16 object-contain transition duration-300 ease-in-out transform hover:scale-110 hover:brightness-125 hover:filter hover:contrast-125" 
            src={logo} 
            alt="Logo" 
          />
          <p className="ml-2 text-sm md:text-base font-bold">
            Yoga Institute
          </p>
        </div>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link 
              to="/" 
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/career" 
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Career
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:underline focus:text-rose-600 transition duration-300 ease-in-out hover:text-yellow-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex md:hidden gap-6">
          {icons.map((item) => (
            <motion.li
              key={item.id}
              className="list-none"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring" }}
            >
              <Link to={item.link}>
                <i className="text-[1.8rem] cursor-pointer">{item.icon}</i>
              </Link>
            </motion.li>
          ))}
        </div>
      </nav>
      <div className="pt-16"> {/* Add top padding to avoid content overlap */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
