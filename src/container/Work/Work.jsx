import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { AppWrap } from '../../wrapper';
import banner from "../../assets/banner.png";
import './Work.scss';

const works = [
  {
    title: "Vibely",
    description: "Vibely simplifies wellness service bookings in Nepal, offering convenience, discounts, and a seamless experience.",
    projectLink: "https://www.vibely.life",
    codeLink: "https://github.com/nishanneupane/vibely-frontend",
    imageUrl: "https://www.upwork.com/att/download/portfolio/persons/uid/1659533540401610752/profile/projects/files/700124e8-f98f-4288-9151-28e354a8690e",
    tags: ['Booking Platform', 'SaaS']
  },
  {
    title: "Verboid AI Platform",
    description: "Mock interview and English-speaking practice platform powered by AI and LLMs.",
    projectLink: "https://verboid.com/", // or your dev/staging URL
    codeLink: "#",
    imageUrl: "https://www.verboid.com/_next/image?url=%2Flogo.png&w=256&q=75", // replace with actual image path
    tags: ['AI', 'SaaS', 'LLMs']
  },
  {
    title: "Pahuna Homes",
    description: "Tourism platform for booking peaceful, authentic local stays across Nepal.",
    projectLink: "https://pahunahomes.com/",
    codeLink: "#",
    imageUrl: "https://www.pahunahomes.com/images/logo.svg", // replace with real image
    tags: ['Travel', 'Booking', 'Marketplace']
  },
  {
    title: "HarashTattoo",
    description: "Harash Tattoo is your go-to destination for unique, custom tattoos crafted by skilled artists who turn your ideas into stunning works of art.",
    projectLink: "https://harashtattoo.com/",
    codeLink: "#",
    imageUrl: "https://harashtattoo.com/wp-content/uploads/2024/11/IMG_7838-775x1024.jpg",
    tags: ['Tattoo Artist']
  },
  {
    title: "Menzz",
    description: "All in one mens ecommerce platform.",
    projectLink: "https://menzz.co",
    codeLink: "#",
    imageUrl: "https://www.upwork.com/att/download/portfolio/persons/uid/1659533540401610752/profile/projects/files/3800a624-b980-49df-b82d-d558ca769449",
    tags: ['Ecommerce Platform']
  },
  {
    title: "VR Application",
    description: "Step into a world of limitless possibilities with ImmerseVR, a cutting-edge virtual reality experience platform.",
    projectLink: "https://ns3vr.vercel.app",
    codeLink: "https://github.com/nishanneupane/ns3vr-advance-ui",
    imageUrl: "https://ns3vr.vercel.app/_next/image?url=%2Fvr12.jpg&w=1920&q=75",
    tags: ['Virtual Reality', 'Business']
  },
  {
    title: "Nimbo Pro",
    description: "A collaborative task management platform for efficient task organization and management.",
    projectLink: "https://nimbopro.vercel.app/",
    codeLink: "https://github.com/nishanneupane/harmonichat",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ['Task Management', 'Business']
  },
  {
    title: "Deliveroo Web Design",
    description: "Website for building responsive and interactive web design for Deliveroo.",
    projectLink: "https://deliveroonp.vercel.app/",
    codeLink: "#",
    imageUrl: "https://deliveroonp.vercel.app/_next/image?url=%2Fdeliveroo_ui%2Fhero-1.jpg&w=3840&q=75",
    tags: ['Website Design', 'Cloning']
  },
  {
    title: "AI Companion",
    description: "An AI character platform where you can chat with different companions like Elon Musk, Mark Zuckerberg, and even create your own companion.",
    projectLink: "https://numinous.vercel.app",
    codeLink: "https://github.com/nishanneupane/ai-companion",
    imageUrl: "https://static.toiimg.com/photo/msid-98022862/98022862.jpg",
    tags: ['Companion AI', 'SaaS']
  },
  {
    title: "Gbot",
    description: "AI application for code, image, video, and music generation, as well as conversation.",
    projectLink: "https://ai-saas-app.vercel.app",
    codeLink: "https://github.com/nishanneupane/ai-saas-app",
    imageUrl: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/m373batch5-004.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f34e63c192e08aac8e1abb4a260ba9f2",
    tags: ['AI', 'SaaS']
  },
  {
    title: "Learnovate",
    description: "A learning management system (LMS) platform designed for interactive learning experiences.",
    projectLink: "https://learnovate.vercel.app",
    codeLink: "https://github.com/nishanneupane/learnovate",
    imageUrl: banner,
    tags: ['LMS', 'SaaS']
  },

];

const Work = () => {
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(works.flatMap(work => work.tags))];

  useEffect(() => {
    filterWorks(activeFilter, searchTerm);
  }, [searchTerm, activeFilter]);

  const filterWorks = (category, term) => {
    if (category === 'All') {
      setFilteredWorks(works.filter(work =>
        work.title.toLowerCase().includes(term.toLowerCase()) ||
        work.description.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredWorks(works.filter(work =>
        work.tags.includes(category) &&
        (work.title.toLowerCase().includes(term.toLowerCase()) ||
          work.description.toLowerCase().includes(term.toLowerCase()))
      ));
    }
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    filterWorks(category, searchTerm);
  };

  return (
    <section className="py-16 bg-gray-50 max-w-full">
      <div className=" mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-12">My Recent <span className="text-blue-600">Projects</span></h2>

        <div className="mb-8">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
          <div className="flex gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>


        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <div className="relative h-48">
                  <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a href={work.projectLink} target="_blank" rel="noreferrer" className="text-white hover:text-blue-300 transition-colors">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AppWrap(Work, 'work');