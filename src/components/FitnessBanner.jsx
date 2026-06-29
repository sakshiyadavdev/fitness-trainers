import "./css/FitnessBanner.css";
import { useEffect, useRef } from "react";

function FitnessBanner() {

    const bannerRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {

            if (!bannerRef.current) return;

            const rect = bannerRef.current.getBoundingClientRect();

            const speed = rect.top * 0.3;

            bannerRef.current.style.backgroundPositionY = `${speed}px`;

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <section
            className="fitness-banner"
            data-aos="fade-up"
            ref={bannerRef}
        >

            <div className="banner-overlay">

                <h2>Commit To Be Fit</h2>

                <p>Find an accredited service provider.</p>

            </div>

        </section>
    )
}

export default FitnessBanner