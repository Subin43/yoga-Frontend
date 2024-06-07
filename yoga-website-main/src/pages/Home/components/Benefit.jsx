import { motion } from "framer-motion";
import { data } from "../../data/data";
import { BenefitTypes } from "../../data/types";

export default function Benefit() {
  return (
    <motion.div
      className="container flex flex-col md:flex-row justify-center items-center gap-6 w-[90%] md:w-[80%] mx-auto py-10 md:py-[10rem]"
      variants={{
        hidden: { opacity: 1, scale: 1 },
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
    >
      {data.map((item: BenefitTypes) => {
        return (
          <motion.li
            key={item.id}
            className="list-none flex flex-col justify-center items-center gap-2 p-4"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            exit={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, duration: 1.8 }}
          >
            <div className="bg-white rounded-full p-4">
              <p>{item.logo}</p>
            </div>
            <h3 className="text-base md:text-xl uppercase text-center">{item.title}</h3>
            <div className="w-12 md:w-20 h-1 bg-blue-500"></div>
            <p className="text-sm md:text-base text-center">{item.desc}</p>
          </motion.li>
        );
      })}
    </motion.div>
  );
}
