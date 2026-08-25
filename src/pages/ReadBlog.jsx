import React from "react";
import { Link, useParams } from "react-router-dom";
import boys from "../assets/boys.png";
import buisness from "../assets/buisness.png";
import meeting from "../assets/meeting.png";
import smile from "../assets/smile.png";
import speking from "../assets/speking.png";
import submit from "../assets/submit.png";
import technology from "../assets/technology.png";

const blogData = {
  1: {
    title:
      "A UX Case Study on Creating a Studious Environment for Students",
    image: boys,
  },

  2: {
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
    image: buisness,
  },

  3: {
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
    image: meeting,
  },

  4: {
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
    image: smile,
  },

  5: {
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
    image: speking,
  },

  6: {
    title:
      "How one Webflow user grew his single person consultancy from $0–100K in 14 months",
    image: submit,
  },
};

function ReadBlog() {
  const { id } = useParams();

  const blog = blogData[id] || blogData[1];

  return (
    <main className="w-full min-h-screen bg-white text-[#292d3a] px-5 md:px-10 py-10">

      <div className="max-w-[900px] mx-auto">


        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition mb-10"
        >
          ← Back to Blog
        </Link>


        <div className="text-center">

          <p className="text-[10px] text-gray-500">
            27 Jan 2021
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
            {blog.title}
          </h1>

          <p className="text-xs text-gray-500 mt-4">
            Andrew Jonson Posted on 27th January 2021
          </p>

        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[250px] md:h-[450px] object-cover mt-10"
        />


        <article className="max-w-[700px] mx-auto mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Creating a better experience
          </h2>

          <p className="text-sm text-gray-600 leading-7 mb-6">
            Apparently we had reached a great height in the atmosphere for the
            sky was a dead black, and the stars had ceased to twinkle. The
            environment around us plays an important role in how we think,
            create and learn.
          </p>

          <p className="text-sm text-gray-600 leading-7 mb-6">
            A good user experience starts with understanding people and
            creating an environment where people can focus on what matters.
            Designers need to think about the user's goals, needs and
            expectations.
          </p>

          <h2 className="text-2xl font-bold mb-5 mt-10">
            The importance of good design
          </h2>

          <p className="text-sm text-gray-600 leading-7 mb-6">
            Great design is not only about making something beautiful. It is
            also about making it useful, simple and accessible. When these
            elements work together, users feel comfortable and confident.
          </p>

          <p className="text-sm text-gray-600 leading-7">
            This case study shows how thoughtful design decisions can create a
            more productive and enjoyable experience for students and teams.
          </p>

        </article>

      </div>

    </main>
  );
}

export default ReadBlog;