import "./css/Program.css";

import {
  FaFileAlt,
  FaSpa,
  FaAppleAlt,
  FaChild,
  FaUserTie,
  FaHandsHelping,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaFileAlt />,
    title: "Fitness Instruction",
    desc: "Focus on your overall fitness that enhances your health and everyday life.",
  },
  {
    icon: <FaSpa />,
    title: "Yoga Programs",
    desc: "Exercises based on breathing, meditation and bodily postures for better health.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition",
    desc: "Nutrition is one of the three key ingredients in all forms of training.",
  },
  {
    icon: <FaChild />,
    title: "Pilates",
    desc: "Simple exercises to improve your physical strength, flexibility and posture.",
  },
  {
    icon: <FaUserTie />,
    title: "Personal Training",
    desc: "Build muscles and lose weight with expert personal trainers.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Massage Therapy",
    desc: "Manual manipulation of soft body tissues to improve health and wellbeing.",
  },
];

function Programs() {
  return (
    <section className="programs">

      <div className="container">

        <div className="section-title">

          <h2>OUR PROGRAMS</h2>

          <p>Best programs in town.</p>

        </div>

        <div className="row">

          {programs.map((item, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="program-card">

                <div className="program-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

                <button onClick={() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}>JOIN NOW</button>

              </div>

            </div>

          ))}

        </div>

        <button className="all-programs">
          CHECK ALL PROGRAMS
        </button>

      </div>

    </section>
  );
}

export default Programs;