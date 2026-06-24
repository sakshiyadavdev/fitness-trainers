import "./css/JoinWithUs.css";
import { FaSearchLocation } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";

function JoinWithUs() {
  return (
    <section className="join-section">
      <div className="container">

        <div
          className="join-heading"
          data-aos="fade-up"
        >
          <h2>JOIN WITH US</h2>
          <p>See the difference.</p>
        </div>

        <div className="row justify-content-center">

          {/* Left */}

          <div
            className="col-lg-5 col-md-6"
            data-aos="fade-right"
          >
            <div className="join-card">

              <FaSearchLocation className="join-icon" />

              <h4>Find a trainer today!</h4>

              <p>
                All of our trainers are certified and highly skilled.
              </p>

              <button>
                FIND A TRAINER
              </button>

            </div>
          </div>

          {/* Right */}

          <div
            className="col-lg-5 col-md-6"
            data-aos="fade-left"
          >
            <div className="join-card">

              <BsMegaphoneFill className="join-icon" />

              <h4>Are you a trainer?</h4>

              <p>
                Join us today! It's free! <br />
                You work on your own terms and decide your own rates.
                We just bring the clients to you!
              </p>

              <button>
                BECOME A TRAINER
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinWithUs;