import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

export default function Welcome() {
  return React.createElement(
    "div",
    { className: "container mx-auto md:flex-row flex flex-col justify-center items-center gap-8 md:gap-[10rem] my-10 md:my-[5rem] relative" },
    React.createElement(
      motion.div,
      {
        className: "flex flex-col gap-4 justify-center items-center px-6 pt-8 md:pt-0 md:px-8 text-center",
        variants: fadeIn("right", 0.3),
        initial: "hidden",
        whileInView: "show",
        exit: "hidden",
        style: { zIndex: 1 }
      },
      React.createElement(
        "h2",
        { className: "text-2xl md:text-4xl mt-4" },
        "Welcome to ",
        React.createElement(
          "span",
          { className: "font-bold" },
          " D.A.Y.S An Yoga Institute"
        )
      ),
      React.createElement(
        "h3",
        { className: "text-lg md:text-xl mt-4" },
        React.createElement(
          "span",
          { className: "font-semibold" },
          "D.A.Y.S."
        ),
        " Provides You"
      ),
      React.createElement(
        motion.ul,
        {
          className: "list-disc pl-6 mt-2 space-y-2 text-md md:text-lg",
          variants: fadeIn("up", 0.5),
          initial: "hidden",
          whileInView: "show"
        },
        ["Twisting Yoga", "Weight Loss Yoga", "Self Balancing Yoga", "Mental Issue Yoga", "Back Bending Yoga"].map((item, index) =>
          React.createElement(
            motion.li,
            {
              key: index,
              className: "text-gray-700",
              variants: {
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
              }
            },
            item
          )
        )
      ),
      React.createElement(
        Link,
        {
          to: "/form",
          className: "bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out text-white block w-full md:w-auto"
        },
        "Demo"
      )
    ),
    React.createElement(
      motion.img,
      {
        src: "main.jpg",
        alt: "yoga",
        className: "h-60 md:h-80 object-cover rounded-2xl bg-transparent absolute top-0 right-0 mr-5 mt-[-40px] md:mt-0",
        variants: fadeIn("left", 0.5),
        initial: "hidden",
        whileInView: "show",
        animate: {
          y: [0, -20, 0]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    ),
    React.createElement(Chatbot, null)
  );
}
