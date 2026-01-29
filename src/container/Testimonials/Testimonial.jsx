import "./Testimonials.scss"
import { motion } from "framer-motion"
import { AppWrap } from '../../wrapper';
import { Link } from "react-router-dom";

// const testimonials = [
//   {
//     name: "Ramesh Sharma",
//     company: "Versik nepal",
//     imageUrl: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000",
//     feedback: "Your portfolio is a stunning display of creativity and talent. Your designs are visually captivating and showcase a deep understanding of aesthetics. I am thoroughly impressed and inspired by your work!"
//   },
//   {
//     name: "Sanskar Giri",
//     company: "Maya Academy",
//     imageUrl: "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png",
//     feedback: "Impeccable portfolio architecture! Nishan has demonstrated a deep understanding of software development principles, resulting in a well-structured and efficient portfolio. The user experience is superb, showcasing their diverse skill set and talent. Impressed by the attention to detail and professionalism."
//   },
//   {
//     name: "Bibek Bhandari",
//     company: "SB solution nepal",
//     imageUrl: "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg",
//     feedback: "Wow! Your portfolio website is absolutely fantastic! The architecture is impressive, and it showcases your software development skills brilliantly. The design is sleek, the user experience is seamless, and the overall presentation is top-notch. It's a true reflection of your talent and expertise. Well done!"
//   },
//   {
//     name: "Subash Tamang",
//     company: "Deerwalk Inc",
//     imageUrl: "https://static.vecteezy.com/system/resources/previews/011/381/995/original/male-customer-service-3d-cartoon-avatar-portrait-png.png",
//     feedback: "Your portfolio website is truly exceptional! The architecture is flawlessly designed, creating a captivating user experience. The attention to detail and organization of your projects demonstrate your expertise as a software developer. It's an impressive showcase of your skills and sets a high standard in the industry. Great job!"
//   },
// ]

const brands = [
  {
    imageUrl: "https://www.vibely.life/vibely.png",
    name: "Vibely",
    url: "https://www.vibely.life/"
  },
  {
    imageUrl: "https://www.hyperce.io/og-logo.png",
    name: "Hyperce",
    url: "https://www.hyperce.io/"
  },
  {
    imageUrl: "https://www.pahunahomes.com/images/logo.svg",
    name: "PahunaHomes",
    url: "https://www.pahunahomes.com"
  },
  {
    imageUrl: "https://kadamstore.netlify.app/static/media/logo.5999575980d51bc4ac0b.png",
    name: "Kadam Fitness",
    url: "https://www.facebook.com/kadamfitness/"
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20220820/ourmid/pngtree-transparent-order-now-png-png-image_6117014.png",
    name: "Order now",
    url: "https://ordernow.com.np/"
  },
  {
    imageUrl: "https://www.uploadvr.com/content/images/2021/02/PS5-VR.png",
    name: "Ns3 Vr Arcade",
    url: "https://www.facebook.com/profile.php?id=100083267560993"
  },
  {
    imageUrl: "https://renewalhub.com.np/static/images/about.jpg",
    name: "Renewal Hub Pvt.Ltd",
    url: "https://renewalhub.com.np/"
  },
]


const Testimonial = () => {
  // const [brands, setBrands] = useState([]);
  // const [testimonials,setTestimonials]=useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const test = testimonials[currentIndex];

  // const handleClick = (index) => {
  //   setCurrentIndex(index)
  // }

  return (
    <>
      {/* {
        testimonials.length && (
          <>
            <div className="app__testimonial-item app_flex">
              <img src={test.imageUrl} alt={test.name} />
              <div className='app__testimonial-content'>
                <p className='p-text'>{test.feedback}</p>
                <div>
                  <h4 className='bold-text'>{test.name}</h4>
                  <h5 className='p-text'>{test.company}</h5>
                </div>
              </div>
            </div>

            <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft/>
              </div>
              <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length-1 ? 0 : currentIndex + 1)}>
              <HiChevronRight/>
              </div>
            </div>
          </>
        )
      } */}

      <div className='flex flex-col py-2'>
        <h2 className="text-4xl font-bold text-center mb-12">Worked <span className="text-blue-600">with</span></h2>
        <div className="app__flex space-x-4 w-full flex-wrap">
          {
            brands.map((brand) => (
              <Link to={brand.url} key={brand.id} className="h-16 w-16 flex items-center border p-2 rounded-md">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, type: "tween" }}
                >
                  <img src={brand.imageUrl} alt={brand.name} style={{ height: "100%", width: "100%", borderRadius: "20%" }} className="mr-4" />
                </motion.div>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  Testimonial, 'testimonials'
);