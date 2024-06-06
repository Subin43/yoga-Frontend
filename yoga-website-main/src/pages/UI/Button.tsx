import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <motion.button
      className={`${className} md:text-lg md:px-4 md:py-2`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
