import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserShield, FaDumbbell } from "react-icons/fa";
import { MdSportsScore, MdSportsGymnastics, MdDirectionsRun } from "react-icons/md";
import { GiJumpAcross } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import "../assets/style/TrainingInfo.css";
import img1 from '../Images/army.jpg';
import img2 from '../Images/gim.jpg';
import img3 from '../Images/game.jpg';
import img4 from '../Images/throw.jpg';
import img5 from '../Images/jump.png';
import img6 from '../Images/run.jpg';
import img7 from '../Images/yoga.jpg';
import runner from '../Images/runner.png';



const trainingData = [
  { icon: <FaUserShield size={60} />, label: "Army & Police Training", image: img1 },
  { icon: <FaDumbbell size={60} />, label: "Physical Fitness & Gym", image: img2 },
  { icon: <MdSportsScore size={60} />, label: "Sports & Games", image: img3 },
  { icon: <MdSportsGymnastics size={60} />, label: "Javelin & Discus Throw", image: img4 },
  { icon: <GiJumpAcross size={60} />, label: "High & Long Jump", image: img5 },
  { icon: <MdDirectionsRun size={60} />, label: "Marathon & Tiger Run", image: img6 },
  { icon: <GrYoga size={60} />, label: "Yoga Meditation", image: img7 },
];

function TrainingInfo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Training Info Section */}
      <section className="training-info m-0 " id="training-info">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 mb-5"
          >
            We prepare students for all types of physical activities:
          </motion.h2>

          <div className="training-grid">
            {trainingData.map((item, index) => (
              <motion.div
                key={index}
                className="training-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.4, ease: "easeOut" }}
              >
                {/* Image appears from bottom on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.img
                      src={item.image}
                      alt={item.label}
                      className="hover-image-inside"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 0.9, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {/* Content wrapper for overflow hidden */}
                <div className="training-content-wrapper">
                  <motion.div
                    className="training-content"
                    animate={hoveredIndex === index ? { y: -150 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Programs Section */}
      <section className="training-programs-advanced m-0 " id="training-programs-advanced">
        
        <div className="container">
          <motion.h2
            className="animate-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            🏋️‍♂️ Free Physical Training Programs
          </motion.h2>

          <motion.p
            className="intro animate-fade"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn your dreams into reality! Whether you aim to serve the nation or achieve peak fitness, our specialized training programs will build your strength, stamina, and spirit — absolutely FREE.
          </motion.p>

          <div className="row">
            <div className="col-md-6">
              <motion.div
                className="training-highlights animate-left"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <h3>Programs Offered:</h3>
                <ul>
                  <li>Indian Army</li>
                  <li>M.P Police & U.P Police</li>
                  <li>Railway Protection Force (R.P.F)</li>
                  <li>Border Security Force (B.S.F)</li>
                  <li>Central Police Organizations (C.P.O)</li>
                  <li>Staff Selection Commission (S.S.C) Fitness Preparation</li>
                </ul>
              </motion.div>

              <motion.div
                className="training-audience animate-right"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <h3>Who Can Join?</h3>
                <ul>
                  <li>Boys & Girls (4 years and above)</li>
                  <li>Fitness Lovers & Uniform Aspirants</li>
                  <li>Anyone aiming for a disciplined life</li>
                </ul>
              </motion.div>
            </div>
            <div className="col-md-6 d-none d-sm-block">
              <div className="runner">
                <img src={runner} alt="" />
              </div>
            </div>
          </div>

          <motion.div
            className="motivation animate-zoom"
            initial={{ opacity: 0, scale: 3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              💬 "Transform your body, conquer your dreams. The nation awaits its heroes!"
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            className="btn-join animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Start Your Mission 🚀
          </motion.a>
        </div>
      </section>
    </>
  );
}

export default TrainingInfo;
