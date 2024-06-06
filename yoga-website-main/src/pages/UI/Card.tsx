import { motion } from "framer-motion";
import Button from "./Button";
import { fadeIn } from "../data/variant";
import { Link } from "react-router-dom";

interface CardProps {
  jobTitle: string;
  jobDescription: string;
}

export default function Card({ jobTitle, jobDescription }: CardProps) {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      className="w-full md:w-[300px] py-6 px-4 grid gap-4 shadow-lg border border-gray-200 rounded-xl transition duration-250 hover:scale-105 bg-white"
    >
      <div className="text-center">
        <i className="text-4xl text-gray-500"></i>
        <p className="text-lg font-semibold text-gray-800 mt-2">{jobTitle}</p>
      </div>

      <div className="text-center">
        <h3 className="bg-gray-200 border border-gray-300 inline-block px-2 rounded-md text-sm font-medium text-gray-700">
          Fresher/Experience
        </h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {jobDescription}
      </p>
      <div className="flex justify-center mt-4">
        <Link to="/job_apply">
          <Button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-full text-sm font-medium">
            Apply Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
