// import { IoMdCall } from "react-icons/io";
// import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
// import { motion } from "framer-motion";
// import Header from "../Career/components/Header";
import ContactCard from "./ContactCard.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center py-8 px-4"> {/* Center the content horizontally and vertically */}
      <div className="flex flex-row space-x-8 w-full max-w-screen-lg"> {/* Align children in a row with space between */}
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
