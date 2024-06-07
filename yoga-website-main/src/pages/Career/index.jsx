import { motion } from "framer-motion";
import Card from "../UI/Card";
import Header from "./components/Header";
import Footer from "../Home/components/Footer"; // Import only once
import { fadeIn } from "../data/variant";

export default function Career() {
  return (
    <div className="flex flex-col mb-22 md:mb-14"> {/* Adjusted margin for mobile view */}
      <Header />
      <motion.div
        className="flex justify-center pt-10"
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h3 className="text-3xl font-medium">Openings</h3>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 mt-12 flex-grow px-4 py-8">
        <Card 
          jobTitle="Yoga Trainer" 
          jobDescription="We are looking for a Yoga Trainer in and around Lucknow.
          I need someone with experience. The Yoga Trainer should be punctual and be willing to work on weekdays.
          Preferred Yoga Style: Patanjali Yoga
          Age group of student: 22-50 years old
          Gender of Student: Male"
        />

        <Card 
          jobTitle="Receptionist" 
          jobDescription="We are hiring a Receptionist to manage our front desk on a daily basis and to perform a variety of administrative and clerical tasks.
          Responsibilities include welcoming guests, answering phones, handling company inquiries, and sorting and distributing mail."
        />

        <Card 
          jobTitle="Mentor" 
          jobDescription="We're seeking a Mentor to guide individuals in their personal and professional growth journey. 
          Responsibilities include providing valuable insights, and support to help mentees achieve their goals.
          Empathy, patience, and a genuine desire to help others succeed"
        />
      </div>
      <div className="mt-16"></div> {/* Increased margin for mobile view */}
      <Footer /> {/* Render Footer only once */}
    </div>
  );
}
