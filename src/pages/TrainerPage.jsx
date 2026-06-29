import { useState } from "react";

import Navbar from "../components/Navbar";
import TrainerHero from "../components/TrainerHero";
import TrainerFilters from "../components/TrainerFilters";
import TrainerList from "../components/TrainerList";
import Programs from "../components/Programs";
import Footer from "../components/Footer";

import trainer1 from "../assets/images/trainer1.jpeg";
import trainer2 from "../assets/images/trainer2.jpeg";
import trainer3 from "../assets/images/trainer3.jpeg";
import trainer4 from "../assets/images/trainer4.jpeg";
import trainer5 from "../assets/images/trainer5.jpeg";
import trainer6 from "../assets/images/trainer6.jpeg";

const trainerData = [
  {
    img: trainer1,
    name: "John Doe",
    role: "Body Trainer",
    state: "California",
    para: "Certified strength trainer helping clients achieve their goals."
  },
  {
    img: trainer2,
    name: "James Smith",
    role: "Swimming Trainer",
    state: "Florida",
    para: "Professional swimming coach with 10+ years of experience."
  },
  {
    img: trainer3,
    name: "Emily Clark",
    role: "Yoga Trainer",
    state: "Texas",
    para: "Yoga instructor focused on flexibility and wellness."
  },
  {
    img: trainer4,
    name: "David Lee",
    role: "CrossFit Trainer",
    state: "California",
    para: "CrossFit expert helping clients build endurance."
  },
  {
    img: trainer5,
    name: "Sophia Brown",
    role: "Nutrition Coach",
    state: "Nevada",
    para: "Nutrition specialist for healthy lifestyle transformations."
  },
  {
    img: trainer6,
    name: "Michael Scott",
    role: "Personal Trainer",
    state: "California",
    para: "Weight loss and bodybuilding coach."
  },
];

function TrainerPage() {

  const [filteredTrainers, setFilteredTrainers] = useState(trainerData);

  const handleSearch = (selectedState) => {

    if (selectedState === "") {
      setFilteredTrainers(trainerData);
      return;
    }

    const result = trainerData.filter(
      (trainer) => trainer.state === selectedState
    );

    setFilteredTrainers(result);
  };

  return (
    <>
      <Navbar />

      <TrainerHero />

      <TrainerFilters onSearch={handleSearch} />

      <TrainerList trainers={filteredTrainers} />

      <Programs />

      <Footer />
    </>
  );
}

export default TrainerPage;