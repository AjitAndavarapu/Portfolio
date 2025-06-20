import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiTailwindcss, SiFlask, SiFlutter, SiFirebase, SiTensorflow, SiVercel, SiMongodb, SiPostman } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies
      </motion.h2>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        {/* Frameworks */}
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(3)}>
          <SiExpress className="text-7xl text-gray-700" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(5)}>
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2)}>
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(6)}>
          <SiFlask className="text-7xl text-white" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiFlutter className="text-7xl text-sky-600" />
        </motion.div>

        {/* Tools */}
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(4)}>
          <FaGitAlt className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(6)}>
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiPostman className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(5)} >
          <SiVercel className="text-7xl text-white" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(8)}>
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(5)} >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>

        {/* Cloud */}
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(7)}>
          <FaAws className="text-7xl text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;