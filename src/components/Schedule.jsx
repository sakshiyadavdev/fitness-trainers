import { useState } from "react";
import "./css/Schedule.css";
import {
  FaDumbbell,
  FaPrayingHands,
  FaBicycle,
} from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";
import { motion } from "framer-motion";

const scheduleData = {
  Sunday: [
    {
      title: "Body Building",
      trainer: "John Doe",
      time: "06AM-7AM",
      icon: <FaDumbbell />,
    },
    {
      title: "Yoga Programs",
      trainer: "James Smith",
      time: "06AM-7AM",
      icon: <FaPrayingHands />,
    },
    {
      title: "Cycling Program",
      trainer: "Rita Doe",
      time: "06AM-7AM",
      icon: <FaBicycle />,
    },
    {
      title: "Boxing Fitness",
      trainer: "John Doe",
      time: "06AM-7AM",
      icon: <GiBoxingGlove />,
    },
  ],

  Monday: [
    {
      icon: <FaPrayingHands />,
      time: "06AM-7AM",
      title: "Yoga Programs",
      trainer: "James Smith",
    },

    {
      icon: <FaDumbbell />,
      time: "06AM-7AM",
      title: "Body Building",
      trainer: "John Doe",
    },

    {
      icon: <GiBoxingGlove />,
      time: "06AM-7AM",
      title: "Boxing Fitness",
      trainer: "John Dose",
    },

    {
      icon: <FaBicycle />,
      time: "06AM-7AM",
      title: "Cycling Program",
      trainer: "Rita Doe",
    },

  ],
  Tuesday: [
    {
      title: "Body Building",
      trainer: "John Doe",
      time: "06AM-7AM",
      icon: <FaDumbbell />,
    },
    {
      title: "Yoga Programs",
      trainer: "James Smith",
      time: "06AM-7AM",
      icon: <FaPrayingHands />,
    },
    {
      title: "Cycling Program",
      trainer: "Rita Doe",
      time: "06AM-7AM",
      icon: <FaBicycle />,
    },
    {
      title: "Boxing Fitness",
      trainer: "John Dose",
      time: "06AM-7AM",
      icon: <GiBoxingGlove />,
    },
  ],

  Wednesday: [
    {
      icon: <FaPrayingHands />,
      time: "06AM-7AM",
      title: "Yoga Programs",
      trainer: "James Smith",
    },

    {
      icon: <FaDumbbell />,
      time: "06AM-7AM",
      title: "Body Building",
      trainer: "John Doe",
    },

    {
      icon: <GiBoxingGlove />,
      time: "06AM-7AM",
      title: "Boxing Fitness",
      trainer: "John Dose",
    },

    {
      icon: <FaBicycle />,
      time: "06AM-7AM",
      title: "Cycling Program",
      trainer: "Rita Doe",
    },

  ],
  Thursday: [
    {
      title: "Body Building",
      trainer: "John Doe",
      time: "06AM-7AM",
      icon: <FaDumbbell />,
    },
    {
      title: "Yoga Programs",
      trainer: "James Smith",
      time: "07AM-8AM",
      icon: <FaPrayingHands />,
    },
    {
      title: "Cycling Program",
      trainer: "Rita Doe",
      time: "06AM-7AM",
      icon: <FaBicycle />,
    },
    {
      title: "Boxing Fitness",
      trainer: "John Dose",
      time: "06AM-7AM",
      icon: <GiBoxingGlove />,
    },
  ],
  Friday: [
    {
      icon: <FaPrayingHands />,
      time: "06AM-7AM",
      title: "Yoga Programs",
      trainer: "James Smith",
    },

    {
      icon: <FaDumbbell />,
      time: "06AM-7AM",
      title: "Body Building",
      trainer: "John Doe",
    },

    {
      icon: <GiBoxingGlove />,
      time: "06AM-7AM",
      title: "Boxing Fitness",
      trainer: "John Dose",
    },

    {
      icon: <FaBicycle />,
      time: "06AM-7AM",
      title: "Cycling Program",
      trainer: "Rita Doe",
    },
  ],
  Saturday: [
    {
      title: "Body Building",
      trainer: "John Doe",
      time: "06AM-7AM",
      icon: <FaDumbbell />,
    },
    {
      title: "Yoga Programs",
      trainer: "James Smith",
      time: "06AM-7AM",
      icon: <FaPrayingHands />,
    },
    {
      title: "Cycling Program",
      trainer: "Rita Doe",
      time: "06AM-7AM",
      icon: <FaBicycle />,
    },
    {
      title: "Boxing Fitness",
      trainer: "John Dose",
      time: "06AM-7AM",
      icon: <GiBoxingGlove />,
    },
  ],
};

function Schedule() {
  const [activeDay, setActiveDay] = useState("Sunday");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <motion.section

      className="schedule-section"

      initial={{ opacity: 0, y: 120 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      viewport={{ once: true, amount: 0.2 }}

    >
      <div className="container">

        <div className="schedule-heading">
          <h2>CLASS SCHEDULE</h2>
          <p>Gym owners use ONLY.</p>
        </div>

        <div className="days-tabs">
          {days.map((day) => (
            <button

              key={day}

              className={activeDay === day ? "active-day" : ""}

              onClick={() => setActiveDay(day)}

            >

              {day}

            </button>
          ))}
        </div>

        <motion.div

          key={activeDay}

          className="schedule-grid"

          initial={{

            opacity: 0,

            y: 20,

          }}

          animate={{

            opacity: 1,

            y: 0,

          }}

          transition={{

            duration: 0.5,

          }}

        >
          {scheduleData[activeDay]?.map((item, index) => (
            <div className="schedule-card" key={index}>
              <div className="icon">{item.icon}</div>

              <span>{item.time}</span>

              <h3>{item.title}</h3>

              <p>{item.trainer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Schedule;