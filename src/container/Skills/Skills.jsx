import React, { useState } from 'react'
import "./Skills.scss"
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

const skills = [
  {
    category: "Frontend",
    technologies: [
      // { name: "HTML", icon: "https://c4.wallpaperflare.com/wallpaper/244/9/297/html-programming-code-blue-wallpaper-preview.jpg" },
      // { name: "CSS", icon: "https://wallpapercave.com/wp/wp3181452.jpg" },
      // { name: "JavaScript", icon: "https://wallpaperaccess.com/full/1555163.jpg" },
      { name: "TypeScript", icon: "https://e0.pxfuel.com/wallpapers/811/90/desktop-wallpaper-typescript.jpg" },
      { name: "React.js", icon: "https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg" },
      { name: "Next.js", icon: "https://wallpapercave.com/wp/wp11846968.png" },
      // { name: "React Native", icon: "https://wallpapercave.com/wp/wp4923981.jpg" },
      { name: "Redux", icon: "https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg" },
      { name: "Tailwind CSS", icon: "https://play.tailwindcss.com/social-square.jpg" },
      // { name: "SCSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJrcHsMcXXX2IXNdlQ2faUH9yZ0jsLa1wxMvulPwUQg&s" },
      // { name: "Material UI", icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
      // { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" },
      // { name: "Framer Motion", icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
      { name: "Shadcn UI", icon: "https://pbs.twimg.com/media/FxoIFVgagAE-gqB?format=png&name=4096x4096" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
      },
      {
        name: "Spring boot",
        icon: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg"
      },
      {
        name: "JAVA",
        icon: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-java-coding-programming.jpg"
      },
    ]
  },
  {
    category: "Database",
    technologies: [
      {
        name: "Mongodb",
        icon: "https://lh5.googleusercontent.com/proxy/cEIdUslCtwNX_v4e4p8kCcHNoC2sojBxv4M6ahBfNhS2KKQDQ9pRs_nOand8y2W6BoxZa5nXotgHxuRaesshKscFOZHH5nK4jig3"
      },
      {
        name: "My Sql",
        icon: "https://futuresolutionsonline.co.uk/wp-content/uploads/2023/04/mySQL-logo.png"

      },
      {
        name: "Graphql/hygraph",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png"

      },
      // {
      //   name: "Sanity",
      //   icon: "https://images.saasworthy.com/sanity_3871_logo_1627289972_2ufw8.png"

      // },
    ]
  },
  {
    category: "Security",
    technologies: [

      // {
      //   name: "Spring Security",
      //   icon: "https://media.licdn.com/dms/image/C4E12AQG9PzLTPHvRVA/article-cover_image-shrink_600_2000/0/1615137890447?e=2147483647&v=beta&t=VWwwXtX-MnatXpTgypGqluwX50FTUyRTOaC7P12noBg"
      // }


      {
        name: "Jwt Authentication",
        icon: "https://miro.medium.com/v2/resize:fit:800/0*WddOBoMIYbSPNGSD.png"

      },
      {
        name: "Next Auth",
        icon: "https://next-auth.js.org/img/logo/logo-sm.png"

      },
      {
        name: "Clerk Auth",
        icon: "https://pipedream.com/s.v0/app_dBhw8k/logo/orig"
      },
    ]
  },
  {
    category: "ORM",
    technologies: [

      {
        name: "Prisma",
        icon: "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png"

      }
    ]
  },
  {
    category: "API Testing",
    technologies: [

      {
        name: "Postman",
        icon: "https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png"
      },
    ]
  },
  {
    category: "Version Control",
    technologies: [
      {
        name: "Git",
        icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
      },
      {
        name: "Github",
        icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      },

    ]
  },
  {
    category: "Deployment",
    technologies: [
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
      },
      {
        name: "Netlify",
        icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
      },
      // {
      //   name: "Firebase",
      //   icon: "https://e1.pxfuel.com/desktop-wallpaper/776/763/desktop-wallpaper-firebase-the-great-the-meh-and-the-ugly-codecamp-google-io.jpg"

      // },
      {
        name: "Supabase",
        icon: "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png"

      },
      // {
      //   name: "Railway",
      //   icon: "https://railway.app/brand/logo-dark.svg"

      // },
    ]
  },
  {
    category: "Rapid API",
    technologies: [
      {
        name: "Rapid API",
        icon: "https://rapidapi.com/static-assets/default/favicon-8e7d522e-653f-4edd-ac27-3f6ed950e45d.png"

      },
    ]
  },
  {
    category: "Payment Gateway",
    technologies: [
      {
        name: "Stripe",
        icon: "https://www.magicbell.com/static/uploads/stripe-logo.svg"

      },

    ]
  },
  {
    category: "Multimedia",
    technologies: [
      {
        name: "Cloudinary",
        icon: "https://mms.businesswire.com/media/20220110005607/en/821955/23/cloudinary_cloud_glyph_blue_png.jpg"

      },
      // {
      //   name: "Uploadthing",
      //   icon: "https://files.raycast.com/yymqn1oa2uvy57ctulssf54rbl7d"

      // },
      {
        name: "Mux",
        icon: "https://www.pagerduty.com/wp-content/uploads/2020/09/mux-logo.png"

      },

    ]
  },
  {
    category: "AI",
    technologies: [
      {
        name: "OpenAI",
        icon: "https://logos.bugcrowdusercontent.com/logos/eee6/48ca/31319ece/686094268269f7f3ae0a05ff011d42ab_openai-logomark_20x.png"
      }
      ,
      {
        name: "Replicate AI",
        icon: "https://cdn.prod.website-files.com/61e7d259b7746e3f63f0b6be/653292ac019c8bed14b59e15_favicon.e390e65c9599.png"
      },

    ]
  },
]

const Skills = () => {
  const [filter, setFilter] = useState('All');

  const filteredSkills = skills.reduce((acc, category) => {
    const filteredTech = category.technologies.filter(tech =>
      filter === 'All' || category.category === filter
    );
    if (filteredTech.length > 0) {
      acc.push({ ...category, technologies: filteredTech });
    }
    return acc;
  }, []);

  const categories = ['All', ...new Set(skills.map(s => s.category))];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-600">Tech Stack</span></h2>

        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
          <div className="flex gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((category) => (
            <motion.div
              key={category.category}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-2 bg-gray-100 flex justify-center items-center shadow-sm">
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-xs text-gray-600 font-medium">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(Skills, 'skills');