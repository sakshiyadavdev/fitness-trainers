import "./css/BlogEvents.css";

function BlogEvents() {
  return (
    <section className="blog-events">
      <div className="container">
        <div className="row justify-content-center">

          <div
            className="col-lg-4 col-md-6 text-center mb-5 mb-lg-0"
            data-aos="fade-up"
          >
            <h3>RECENT FROM BLOG</h3>
          </div>

          <div
            className="col-lg-4 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>UPCOMING EVENTS</h3>

            <div className="event-box">
              <h4>Coming soon</h4>
              <span>Posted by Admin</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogEvents;