import React from "react";

function ReadBlog() {
  return (
    <main className="w-full min-h-screen bg-white text-[#292d3a]">

      <section className="max-w-[950px] mx-auto px-5 md:px-10 lg:px-16 py-10">

        {/* TITLE */}
        <div className="max-w-[650px] mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight">
            A UX Case Study on Creating a
            <br />
            Studious Environment for Students
          </h1>

          <p className="text-[8px] md:text-[9px] text-gray-500 mt-4">
            Andrew Jonson Posted on 27th January 2021
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full mt-8 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
            alt="Students"
            className="w-full h-[220px] md:h-[350px] lg:h-[430px] object-cover"
          />
        </div>

        {/* ARTICLE */}
        <article className="max-w-[600px] mx-auto mt-10">

          <h2 className="text-lg md:text-xl font-bold leading-tight">
            Lorem ipsum dolor sit amet, consectetur
            <br className="hidden md:block" />
            adipiscing elit.
          </h2>

          <p className="text-[9px] md:text-[10px] text-gray-500 leading-[1.8] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <h2 className="text-base md:text-lg font-bold mt-8">
            Ut enim ad minim veniam, quis nostrud.
          </h2>

          <p className="text-[9px] md:text-[10px] text-gray-500 leading-[1.8] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* LIST */}
          <ul className="list-disc pl-5 mt-5 space-y-2">
            <li className="text-[9px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>

            <li className="text-[9px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>

            <li className="text-[9px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <p className="text-[9px] md:text-[10px] text-gray-500 leading-[1.8] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* SECOND IMAGE */}
          <div className="w-full mt-7 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
              alt="Business meeting"
              className="w-full h-[220px] md:h-[320px] lg:h-[360px] object-cover"
            />
          </div>

          <h2 className="text-base md:text-lg font-bold mt-8">
            Ut enim ad minim veniam, quis nostrud.
          </h2>

          <p className="text-[9px] md:text-[10px] text-gray-500 leading-[1.8] mt-3 pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

        </article>
      </section>

    </main>
  );
}

export default ReadBlog;