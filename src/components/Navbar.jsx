import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">

            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/programs"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Programs
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                All Services
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                About FTN
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown custom-dropdown">
                            <button className="join-btn">
                                JOIN OUR NETWORK
                            </button>

                            <ul className="dropdown-menu-custom">
                                <li>
                                    <Link to="/trainers">Find a Trainer</Link>
                                </li>

                                <li>
                                    <Link to="/become-trainer">Become a Trainer</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;