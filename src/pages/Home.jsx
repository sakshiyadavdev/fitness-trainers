import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import Programs from "../components/Programs";
import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FitnessBanner from "../components/FitnessBanner";
import BlogEvents from "../components/BlogEvents";
import JoinwithUs from "../components/JoinwithUs";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Schedule />
            <FitnessBanner />
            <Programs />
            <Trainers />
            <Pricing />
            <BlogEvents />
            <JoinwithUs />
            <Footer />
        </>
    );
}

export default Home;