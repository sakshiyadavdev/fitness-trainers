import "./css/Trainers.css";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import trainer1 from "../assets/images/trainer1.jpeg";
import trainer2 from "../assets/images/trainer2.jpeg";
import trainer3 from "../assets/images/trainer3.jpeg";
import trainer4 from "../assets/images/trainer4.jpeg";
import trainer5 from "../assets/images/trainer5.jpeg";
import trainer6 from "../assets/images/trainer6.jpeg";

const trainers = [
    {
        img: trainer1,
        name: "John Doe",
        role: "Body Trainer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
    },
    {
        img: trainer2,
        name: "James Smith",
        role: "Swimming Trainer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
    },
    {
        img: trainer3,
        name: "John Doe",
        role: "Chief Executive Officer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: trainer4,
        name: "John Doe",
        role: "Chief Executive Officer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: trainer5,
        name: "John Doe",
        role: "Chief Executive Officer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        img: trainer6,
        name: "John Doe",
        role: "Chief Executive Officer",
        para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
];

function Trainers() {
    return (
        <section className="trainers-section">

            <div className="container">

                <div
                    className="trainer-heading"
                    data-aos="fade-up"
                >
                    <h2>MEET OUR TRAINERS</h2>

                    <p>Find best trainers around you.</p>

                </div>

                <div className="trainer-grid">

                    {trainers.map((trainer, index) => (

                        <div
                            className="trainer-card"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >

                            <img
                                src={trainer.img}
                                alt={trainer.name}
                            />

                            <div className="trainer-overlay">

                                <h3>{trainer.name}</h3>

                                <span>{trainer.role}</span>

                                <p>
                                    {trainer.para}
                                </p>

                                <div className="trainer-icons" >

                                    <FaFacebookF onClick={() => {
                                        document
                                            .getElementById("home")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }} />

                                    <FaEnvelope onClick={() => {
                                        document
                                            .getElementById("home")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }} />

                                    <FaPhoneAlt onClick={() => {
                                        document
                                            .getElementById("home")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }} />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Trainers;