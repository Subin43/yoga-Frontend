import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Achievement() {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-4 px-4 pb-32 overflow-auto">
      <div>
        <h2 className="text-2xl md:text-4xl">Achievements</h2>
      </div>
      <motion.ul
        className="w-full md:w-[800px] flex flex-col gap-6"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            In the year 2012, got the first position in the speech competition held at Shri Ram Krishna Math, Lucknow
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            Got the first position in the online Yogasan Championship organized by Daria Bria University Jharkhand in the year 2021
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            Got third place in the senior category of traditional event in the district level Yogasan sports competition organized by Uttar Pradesh Yoga Sport Association in the year 2022.
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            In the year 2022, got the first position in the artistic event in the district level Yogasan sports competition organized by the Uttar Pradesh Yogasan Sports Association.
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            In the year 2021, got second place from the state of Uttar Pradesh in the Yogasana competition organized by the Ministry of AYUSH.
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            In the year 2023, Dus Ka Dum Women's Yogasan Competition was organized under Khelo India, in which gained experience of working as a judge.
          </p>
        </li>
        <li className="flex gap-2">
          <span>
            <Check />
          </span>
          <p className="text-sm md:text-base">
            In the year 2023, gained experience of working as a judge in the Uttar Pradesh G 20 Yoga League organized by the Directorate of Sports.
          </p>
        </li>
      </motion.ul>
    </div>
  );
}
