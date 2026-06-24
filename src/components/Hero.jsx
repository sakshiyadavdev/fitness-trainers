import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./css/Hero.css";

function Hero() {

  const heroRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {

      if (heroRef.current) {

        const offset = window.pageYOffset;

        heroRef.current.style.backgroundPositionY = `${offset * 0.5}px`;

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <motion.section
      className="hero"
      id="home"
      ref={heroRef}
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="overlay">
        <div className="container hero-content">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Fitness & Health
            <br />
            is a <span>Mentality</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3, duration: 1 }}
          >
            A network of accredited Personal Trainers in USA and Canada
          </motion.p>

          <motion.button
            className="hero-btn"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .6, duration: .6 }}
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{
              scale: .95
            }}
          >
            START YOUR JOURNEY
          </motion.button>

        </div>
      </div>
    </motion.section>
  );
}

export default Hero;