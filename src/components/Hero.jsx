import React from "react";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Ravi Kumar"
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={650}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={childVariants}
            >
              Nana Owusu-Ansah Ntodi
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-transparent text-3xl tracking-tight"
              variants={childVariants}
            >
              Software Engineer
            </motion.span>
            <motion.p
              className="mt-4 text-lg text-center lg:text-left lg:max-w-xl"
              variants={childVariants}
            >
              Motivated Software Engineer with hands-on experience in full-stack
              development, AI integration, and DevOps tools. Skilled in building
              scalable web applications using modern frameworks like React and
              Node.js, with a passion for leveraging LLMs and cloud technologies
              to solve real-world problems. Proven ability to deliver projects
              that enhance usability and performance.
            </motion.p>
            <motion.a
              href="/NanaNtodiCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-4 py-2 mt-4 text-stone-900 font-semibold hover:bg-stone-200 transition duration-300"
              variants={childVariants}
            >
              Download Resume{" "}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
