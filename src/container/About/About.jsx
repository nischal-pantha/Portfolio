import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import AppWrap from '../../wrapper/AppWrap';
import { images } from '../../constants';

const abouts = [
  {
    title: "Fullstack Developer",
    description: "I build fast, responsive, and user-friendly web apps with Next.js, React, and Node.js—because clean code matters.",
    imgUrl: "https://e1.pxfuel.com/desktop-wallpaper/766/945/desktop-wallpaper-custom-software-development-app-development.jpg"
  },
  {
    title: "Mobile App Developer",
    description: "I create smooth, easy-to-use mobile apps with React Native & Expo—because great UX makes all the difference.",
    imgUrl: "https://wallpaperaccess.com/full/3770579.jpg"
  },
  {
    title: "Startup Enthusiast",
    description: "I love building things from scratch, scaling ideas, and turning startups into something real.",
    imgUrl: images.startup
  },
  {
    title: "Graphic Designer",
    description: "I design visuals that grab attention—whether it’s with Canva or Photoshop, I make things look good.",
    imgUrl: "https://st3.depositphotos.com/7809818/17430/v/450/depositphotos_174305654-stock-illustration-black-smartphone-with-facebook-on.jpg"
  },
];


const About = () => {
  return (
    <section>
      <div className="app__about" style={{ paddingTop: '0px' }}>
        <motion.h2
          className="head-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Here's <span className="text-blue-600">My Skills</span>
        </motion.h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              key={about.title + index}
              className="app__profile-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="app__profile-content">
                <img src={about.imgUrl} alt={about.title} className="app__profile-img" />
                <h3 className="bold-text">{about.title}</h3>
                <p className="p-text">{about.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(About, 'about');