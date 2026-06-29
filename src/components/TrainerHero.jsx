import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/TrainerHero.css";

gsap.registerPlugin(ScrollTrigger);

function TrainerHero() {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.to(heroRef.current, {
            backgroundPosition: "center 80%",
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <motion.section
            ref={heroRef}
            className="trainer-hero"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
        >
            {/* class name change ki hai */}
            <div className="trainer-hero-overlay">
                <div className="container trainer-content">

                    <motion.p
                        className="trainer-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        ACCREDITED PERSONAL TRAINERS
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        Find Your
                        <br />
                        Perfect Trainer
                    </motion.h1>

                    <motion.p
                        className="trainer-description"
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Search accredited fitness professionals near you and begin your
                        fitness journey with confidence.
                    </motion.p>

                </div>
            </div>
        </motion.section>
    );
}

export default TrainerHero;