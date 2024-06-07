import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { fadeIn } from "../data/variant";
import Lucknow from "../Home/components/assets/Lucknow map.png";

export default function Card() {
  const handleCallClick = () => {
    // Open Dialer with phone number
    window.location.href = `tel:+918127227284`; // Adjust phone number if needed
  };

  const handleEmailClick = () => {
    // Open Email App with pre-filled email address
    window.location.href = `mailto:anyogainstitute@gmail.com`; // Adjust email address if needed
  };

  const handleLocationClick = () => {
    // Open Google Maps with the specified address
    window.open("https://maps.app.goo.gl/T68A7xtXzr81fDz19");
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      className="w-full md:w-[400px] flex flex-col shadow-lg border border-gray-200 rounded-xl bg-white transition duration-250 hover:scale-105 p-6 my-10"
    >
      {/* Contact Info Section */}
      <motion.div
        className="flex items-center space-x-4 my-4"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.1 } },
        }}
        initial="hidden"
        animate="show"
      >
        <IoMdCall className="text-3xl text-green-600 cursor-pointer" onClick={handleCallClick} />
        <span className="text-gray-600">+91 8127227284</span>
      </motion.div>

      {/* Email Section */}
      <motion.div
        className="flex items-center space-x-4 my-4"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.2 } },
        }}
        initial="hidden"
        animate="show"
      >
        <MdOutlineEmail className="text-3xl text-green-600 cursor-pointer" onClick={handleEmailClick} />
        <span className="text-gray-600">anyogainstitute@gmail.com</span>
      </motion.div>

      {/* Address Section */}
      <motion.div
        className="flex items-center space-x-4 my-4 text-left min-w-[200px]"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.3 } },
        }}
        initial="hidden"
        animate="show"
      >
        <FaLocationArrow className="text-3xl text-green-600 cursor-pointer" onClick={handleLocationClick} />
        <span className="text-base leading-snug text-gray-600">
          Behind Batti chokha restaurant near BABA IAS Coaching, Kothari Bandhu
          park sector J Aliganj, Lucknow
        </span>
      </motion.div>
      
      {/* Image Section */}
      <motion.div
        className="flex justify-center my-4"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.4 } },
        }}
        initial="hidden"
        animate="show"
      >
        <a href="https://maps.app.goo.gl/T68A7xtXzr81fDz19" target="_blank" rel="noopener noreferrer">
          <img src={Lucknow} alt="Lucknow" className="rounded-xl cursor-pointer" />
        </a>
      </motion.div>
    </motion.div>
  );
}
