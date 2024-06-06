import { motion } from "framer-motion";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) {
  return (
    <motion.button
      className={`${className} md:text-lg md:px-4 md:py-2`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.button>
  );
}
