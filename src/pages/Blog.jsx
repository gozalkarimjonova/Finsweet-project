import React from "react";
import { Link } from "react-router-dom";
import boys from "../assets/boys.png";
import buisness from "../assets/buisness.png";
import meeting from "../assets/meeting.png";
import smile from "../assets/smile.png";
import speking from "../assets/speking.png";
import submit from "../assets/submit.png";
import technology from "../assets/technology.png";

const blogs = [
  {
    id: 1,
    image: boys,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
  {
    id: 2,
    image: buisness,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
  {
    id: 3,
    image: meeting,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
  {
    id: 4,
    image: smile,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
  {
    id: 5,
    image: speking,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
  {
    id: 6,
    image: submit,
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
  },
];

function Blog() {
  return (
    <main className="w-full min-h-screen bg-white text-[#292d3a] px-5 md:px-10 lg:px-16 py-10">

      {/* ================= HERO ================= */}

      <section className="max-w-[950px] mx-auto text-center">

        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          A UX Case Study on Creating a
          <br />
          Studious Environment for Students
        </h1>

        <p className="text-[9px] text-gray-500 mt-4">
          Andrew Jonson Posted on 27th January 2021
        </p>

        {/* FIGMADAN HERO RASM */}
        <img
          src={buisness}
          alt="UX Case Study"
          className="w-full h-[220px] md:h-[350px] lg:h-[430px] object-cover mt-7"
        />

        <div className="max-w-[600px] mx-auto mt-5">

          <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
            Apparently we had reached a great height in the atmosphere for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of
            the spectator on a hillside.
          </p>

          {/* HERO READ MORE */}
          <Link
            to="/read-blog/1"
            className="inline-block mt-4 text-[10px] text-violet-500 hover:text-violet-700 transition"
          >
            Read more
          </Link>

        </div>

      </section>

      {/* ================= OUR BLOG ================= */}

      <section className="max-w-[950px] mx-auto mt-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group"
            >

              {/* IMAGE */}

              <div className="w-full h-[180px] overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <p className="text-[8px] text-gray-500 mt-3">
                27 Jan 2021
              </p>

              <h3 className="text-sm md:text-[14px] font-medium leading-snug mt-2">
                {blog.title}
              </h3>


              <p className="text-[9px] text-gray-500 leading-relaxed mt-2">
                See how pivoting to Webflow changed one person's sales strategy
                and allowed him to attract more customers.
              </p>

  

              <Link
                to={`/read-blog/${blog.id}`}
                className="inline-flex items-center gap-2 text-[9px] font-medium text-[#292d3a] mt-3 hover:text-violet-600 transition"
              >
                Read More
                <span className="text-sm">
                  →
                </span>
              </Link>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Blog;