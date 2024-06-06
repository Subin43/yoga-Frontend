import { motion } from "framer-motion";
// import { CircleCheck } from "lucide-react";
import { fadeIn } from "../../data/variant";
// import { listDatas } from "../../data/data";
import { FaRegHandPointRight } from "react-icons/fa";

export default function Feature() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[4rem] mt-10 md:mt-[10rem] py-10 px-4">
      <motion.img
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        src="pose-2.jpg"
        alt="feature"
        className="w-full md:w-[400px] h-auto md:h-[400px] rounded-2xl object-cover"
      />

      <motion.div className="flex flex-col gap-4 md:gap-6">
        <motion.h2
          className="text-2xl md:text-[2rem] text-center md:text-left"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Why you should learn
          <br /> from us?
        </motion.h2>
        <motion.p
          className="w-full md:w-[500px] px-4 md:px-0 text-center md:text-left"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <FaRegHandPointRight className="text-2xl text-black mr-2 inline" />
          Continuing your journey with us means unlocking the transformative power of yoga.
          Immerse yourself in our rich heritage and embrace the holistic approach to well-being. 
          Explore diverse practices tailored to your needs and aspirations. Join our vibrant community 
          and embark on a path of self-discovery and growth.!
          <br/>
          <FaRegHandPointRight className="text-2xl text-black mr-2 inline" />
          We first prepare a protocol related to yoga asana, pranayam and meditation 
          considering your physical and mental problems. We work 5 days a week on 5 major 
          categories of Yogasana Back Bending, Forward Bending, Twisting, Hand Balancing, 
          and Leg Balancing due to which our physical and mental health remains perfect
        </motion.p>

        {/* <motion.ul
          className="text-red-400 list-none space-y-2 md:space-y-4"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          {listDatas.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex items-center gap-2">
                  <CircleCheck className="w-5 h-5" />
                  <p>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </motion.ul> */}
      </motion.div>
    </div>
  );
}
