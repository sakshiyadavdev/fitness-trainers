import "./css/Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row gy-5">

                    {/* About */}

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                    >

                        <h4>ABOUT US</h4>

                        <p>
                            Fitness Trainers Network connects individuals with certified
                            personal trainers who are passionate about helping people
                            achieve healthier lifestyles. Whether you're looking to lose
                            weight, build strength, improve flexibility, or maintain a
                            balanced fitness routine, our experienced trainers are here to
                            guide you every step of the way.
                        </p>

                    </div>

                    {/* Address */}

                    <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >

                        <h4>OUR ADDRESS</h4>

                        <div className="footer-contact">

                            <p>
                                <FaPhoneAlt /> +91 9876543210
                            </p>

                            <p>
                                <FaEnvelope /> info@fitnesstrainersnetwork.com
                            </p>

                            <p>
                                <FaGlobe /> www.fitnesstrainersnetwork.com
                            </p>

                        </div>

                    </div>

                    {/* Contact */}

                    <div
                        className="col-lg-5"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >

                        <h4>DROP US A LINE</h4>

                        <form>

                            <input
                                type="text"
                                placeholder="Name"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                            />

                            <textarea
                                rows="4"
                                placeholder="Message"
                            ></textarea>

                            <button type="submit">
                                SEND MESSAGE
                            </button>

                        </form>

                    </div>

                </div>

                <hr />

                <div className="footer-bottom">

                    <div className="social-icons">

                        <a

                            href="https://www.facebook.com/fitnesstrainers/"

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label="Facebook"

                        >

                            <FaFacebookF />

                        </a>

                        <a href="#"
                            onClick={() => {
                                document
                                    .getElementById("home")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}>
                            <FaInstagram />
                        </a>

                    </div>

                    <p>
                        Copyright 2018 fitnesstrainersnetwork. All Rights Reserved.
                    </p>

                    <span>
                        DESIFNED & DEVELOPED BY SAKSHI
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;