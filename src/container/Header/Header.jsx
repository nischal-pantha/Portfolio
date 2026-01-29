import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from "../../wrapper"
import './Header.scss';

const Header = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, y: 50, rotate: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 1
      }
    },
  };

  return (
    <div className="app__header app__flex ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            className="badge-cmp app__flex bg-white rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="text-4xl">
              👋
            </span>
            <div className="ml-6">
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello! I'm
              </motion.p>
              <motion.h1
                className="text-4xl font-bold text-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Nischal Pantha
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={techStackVariants}
        className="app__header-circles flex justify-center items-center space-x-8"
      >
        {[images.node, images.nextjs, images.react].map((tech, index) => (
          <motion.div
            className="circle-cmp app__flex bg-white rounded-full p-4 shadow-md"
            key={`circle-${index}`}
            variants={techItemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 12px rgba(0,0,0,0.3)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img src={tech} alt={`tech-${index}`} className="w-16 h-16 object-cover" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="app__header-img mt-12"
      >
        <motion.div
          className='relative'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <motion.img
            src={images.banner}
            alt="profile"
            className='rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl'
            style={{
              width: "350px",
              height: "350px",
              objectFit: "cover",
              border: "12px solid rgba(255, 255, 255, 0.8)",
            }}
            whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Full Stack Dev | Startup Enthusiast
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');