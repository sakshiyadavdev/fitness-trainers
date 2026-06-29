import { useEffect, useState } from "react";
import "./css/BlogEvents.css";

function BlogEvents() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.feedburner.com/acefitness/fitnovatives"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.items.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-title">
          <h2>RECENT FROM BLOG</h2>
          <p>Latest Fitness & Health Articles</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div
              className="blog-card"
              key={index}
              data-aos="fade-up"
            >
              <img
                src={
                  blog.thumbnail ||
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
                }
                alt={blog.title}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800";
                }}
              />

              <div className="blog-content">
                <span>
                  {blog.pubDate
                    ? new Date(blog.pubDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    : "Latest Article"}
                </span>

                <h3>{blog.title}</h3>

                <p>
                  {blog.description
                    .replace(/<[^>]+>/g, "")
                    .substring(0, 140)}
                  ...
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogEvents;