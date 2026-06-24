import "./css/Pricing.css";

const plans = [
  {
    title: "STARTER",
    price: 75,
    offer: "",
    features: [
      "2 hours of FREE nutritional advice",
      "12 sessions package",
      "Expert Trainer",
      "Minimum of 3 sessions per week",
      "Must purchase 12 session package",
    ],
  },

  {
    title: "BASIC",
    price: 70,
    offer: "",
    features: [
      "4 hours of FREE nutritional and coaching advice",
      "24 sessions package",
      "Expert Trainer",
      "Minimum of 3 sessions per week",
      "Must purchase 24 session package",
    ],
  },

  {
    title: "PRO",
    price: 65,
    offer: "BEST OFFER",
    active: true,
    features: [
      "6 hours of FREE nutritional and coaching advice",
      "36 sessions package",
      "Expert Trainer",
      "Minimum of 3 sessions per week",
      "Must purchase 36 session package",
    ],
  },

  {
    title: "BUDGET PLAN",
    price: 60,
    offer: "",
    features: [
      "8 hours of FREE nutritional and coaching advice",
      "48 sessions package",
      "Expert Trainer",
      "Minimum of 3 sessions per week",
      "Must purchase 48 session package",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section">

      <div className="container">

        <div className="pricing-heading" data-aos="fade-up">

          <h2>PRICING PLAN</h2>

          <p>
            Join our family and start your journey to a fit life!
          </p>

        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`pricing-card ${plan.active ? "active" : ""}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <h5>{plan.title}</h5>

              {plan.offer && <span>{plan.offer}</span>}

              <div className="price">

                <small>$</small>

                {plan.price}

              </div>

              <p className="session">/SESSION</p>

              <h4>Any line</h4>

              <ul>

                {plan.features.map((item, i) => (

                  <li key={i}>{item}</li>

                ))}

              </ul>

              <button
                onClick={() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}>
                SELECT PLAN
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;