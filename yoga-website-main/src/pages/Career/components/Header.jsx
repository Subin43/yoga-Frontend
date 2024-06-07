import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Header() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-8 md:flex-row md:justify-center md:items-center md:gap-8 w-full"
      style={{ width: "100vw" }}
    >
      <motion.img
        variants={fadeIn("left", 0.3)} // Add animation variant
        initial="hidden"
        whileInView="show"
        src="yoga/groupYoga.jpeg"
        alt="yoga"
        className="w-full md:w-2/3 rounded-lg mb-4 md:mb-0" // Adjusted width to 2/3 of the container
        style={{ maxWidth: "600px" }} // Added max-width to limit the image size
        animate="visible" // Trigger animation when component is visible
      />
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-center md:text-left w-full md:w-1/2"
      >
        <h1 className="text-2xl md:text-3xl">
          Start your <span className="text-rose-500">Career</span> with us!
        </h1>
        <p className="mt-4">
          Join our passionate team dedicated to spreading wellness and mindfulness.
          Grow your career in a supportive and enriching environment.
          Be part of a dynamic community that values growth and learning.
          Help us inspire and transform lives through the power of yoga.
        </p>
      </motion.div>
    </motion.div>
  );
}
