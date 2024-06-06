import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Divine() {
  return (
    <motion.div className="py-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[7rem] mx-auto">
      <motion.img
        variants={fadeIn("right", 0.3)}
        src="divine.jpg"
        alt="pose"
        className="w-[200px] md:w-[300px] rounded-xl"
        initial="hidden"
        whileInView="show"
      />
      <motion.div
        className="w-[90%] md:w-[500px]"
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-2xl md:text-4xl text-center ">
          Dive in the World Of Health & Fitness
        </h2>
        <p className="mt-4 md:mt-6 text-sm md:text-base text-center md:text-left">
          At our online yoga studio, we offer a mix of yoga styles, including
          Hatha and Ashtanga Vinyasa, alongside teachings on how to maintain a
          yogic lifestyle for both physical and mental well-being. Our programs
          are designed to cater to both group and individual needs and can be
          taken online from the comfort of your own home. All group class
          duration will be one hour.
        </p>
        
      </motion.div>
    </motion.div>
  );
}
