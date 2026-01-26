import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Frontend Developer",
    company: "GhairMulki Software House (Pvt.) Ltd.",
    date: "2022 - 2023",
    responsibilities: [
      "Built responsive web apps with React & Next.js.",
      "Created reusable UI components.",
      "Optimized app performance.",
      "Collaborated with designers and backend developers.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Alex Apps",
    date: "2023 - Present",
    responsibilities: [
      "Developed full-stack MERN applications.",
      "Built dashboards and dynamic websites.",
      "Integrated APIs and optimized backend communication.",
      "Contributed to code reviews and project planning.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React & TailwindCSS.",
      "Preparing course materials.",
      "Guiding students through projects.",
      "Providing mentorship and support for learners.",
    ],
  },
];




const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
