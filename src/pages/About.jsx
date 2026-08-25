import React from "react";
import officeImg from "../assets/offise.png";
import daskImg from "../assets/dask.jpg";
import manImg from "../assets/man.png";
import girlImg from "../assets/girl.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

import mask from "../assets/mask.png";
import mann from "../assets/mann.png";
import mannn from "../assets/mannn.png";
import mannnn from "../assets/mannnn.png";

function About() {
  return (
    <div className="w-full bg-white text-[#232536] overflow-hidden">
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[10px] md:text-xs font-medium block mb-2">
              About us
            </span>

            <h1 className="text-[30px] sm:text-[34px] md:text-[42px] font-bold leading-[1.1] mb-5 max-w-[500px]">
              Our designs solve problems
            </h1>

            <p className="text-[11px] md:text-sm leading-[1.7] text-[#6d6e76] max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="w-full">
            <img
              src={officeImg}
              alt="Office team working"
              className="w-full h-[220px] md:h-[280px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-14">
        <div className="bg-[#f4f6fc]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 px-6 py-8 md:px-14 md:py-12">
            <div>
              <span className="text-[10px] md:text-xs font-medium block mb-2">
                Who we are
              </span>

              <h2 className="text-[22px] md:text-[30px] font-bold mb-3">
                Goal focussed
              </h2>

              <p className="text-[10px] md:text-xs leading-[1.7] text-[#6d6e76]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <span className="text-[10px] md:text-xs font-medium block mb-2 invisible">
                Who we are
              </span>

              <h2 className="text-[22px] md:text-[30px] font-bold mb-3">
                Continuous improvement
              </h2>

              <p className="text-[10px] md:text-xs leading-[1.7] text-[#6d6e76]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="w-full">
            <img
              src={daskImg}
              alt="Office planning"
              className="w-full h-[230px] sm:h-[300px] md:h-[360px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20">
        <h2 className="text-center text-[25px] md:text-[34px] font-bold mb-10 md:mb-14">
          The process we follow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#2405F4] rounded-full shrink-0"></div>
              <div className="flex-1 border-t border-dashed border-[#2405F4] ml-2"></div>
            </div>

            <h3 className="text-sm md:text-base font-bold mb-2">Planning</h3>

            <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#2405F4] rounded-full shrink-0"></div>
              <div className="flex-1 border-t border-dashed border-[#2405F4] ml-2"></div>
            </div>

            <h3 className="text-sm md:text-base font-bold mb-2">Conception</h3>

            <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#2405F4] rounded-full shrink-0"></div>
              <div className="flex-1 border-t border-dashed border-[#2405F4] ml-2"></div>
            </div>

            <h3 className="text-sm md:text-base font-bold mb-2">Design</h3>

            <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#2405F4] rounded-full shrink-0"></div>
              <div className="flex-1 border-t border-dashed border-[#2405F4] ml-2 hidden lg:block"></div>
            </div>

            <h3 className="text-sm md:text-base font-bold mb-2">Development</h3>

            <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef4fa]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-14 md:mb-20">
            <div className="order-2 md:order-1">
              <span className="text-[10px] md:text-xs font-medium block mb-2">
                Our Mission
              </span>

              <h2 className="text-[22px] md:text-[30px] font-bold mb-4">
                Inspire, Innovate, Share
              </h2>

              <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.7] max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={manImg}
                alt="Our Mission"
                className="w-full h-[220px] md:h-[280px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <img
                src={girlImg}
                alt="Our Vision"
                className="w-full h-[220px] md:h-[280px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <span className="text-[10px] md:text-xs font-medium block mb-2">
                Our Vision
              </span>

              <h2 className="text-[22px] md:text-[30px] font-bold mb-4">
                Laser focus
              </h2>

              <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.7] max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <h2 className="text-center text-[28px] md:text-[36px] font-bold leading-[1.15] max-w-[500px] mx-auto mb-10 md:mb-12">
            The benefits of working
            <br />
            with us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <div className="bg-[#f4f6fc] p-6 md:p-7 min-h-[158px]">
              <div className="text-[#2405F4] text-2xl mb-3">📝</div>

              <h3 className="text-[15px] md:text-base font-medium mb-2">
                Customize with ease
              </h3>

              <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-[#f4f6fc] p-6 md:p-7 min-h-[158px]">
              <div className="text-[#2405F4] text-2xl mb-3">🛠️</div>

              <h3 className="text-[15px] md:text-base font-medium mb-2">
                Perfectly Responsive
              </h3>

              <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-[#f4f6fc] p-6 md:p-7 min-h-[158px]">
              <div className="text-[#2405F4] text-2xl mb-3">👥</div>

              <h3 className="text-[15px] md:text-base font-medium mb-2">
                Friendly Support
              </h3>

              <p className="text-[10px] md:text-xs text-[#6d6e76] leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="shrink-0">
              <h3 className="text-[20px] md:text-[22px] font-bold">100.000+</h3>

              <p className="text-[9px] text-[#6d6e76]">Finsweet Users</p>
            </div>

            <img
              src={logo1}
              alt="Logo 1"
              className="h-6 w-auto object-contain"
            />

            <img
              src={logo2}
              alt="Logo 2"
              className="h-6 w-auto object-contain"
            />

            <img
              src={logo3}
              alt="Logo 3"
              className="h-6 w-auto object-contain"
            />

            <img
              src={logo4}
              alt="Logo 4"
              className="h-6 w-auto object-contain"
            />

            <img
              src={logo5}
              alt="Logo 5"
              className="h-6 w-auto object-contain"
            />

            <img
              src={logo6}
              alt="Logo 6"
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f6fc]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-10 md:mb-12">
            Meet our team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <div className="bg-white text-center px-5 py-6 md:py-7">
              <img
                src={mask}
                alt="John Smith"
                className="w-[84px] h-[84px] md:w-[92px] md:h-[92px] mx-auto object-cover rounded-full mb-4"
              />

              <h3 className="text-[14px] md:text-base font-medium">
                John Smith
              </h3>

              <p className="text-[10px] text-[#6d6e76] mt-1">CEO</p>
            </div>

            <div className="bg-white text-center px-5 py-6 md:py-7">
              <img
                src={mann}
                alt="Simon Adams"
                className="w-[84px] h-[84px] md:w-[92px] md:h-[92px] mx-auto object-cover rounded-full mb-4"
              />

              <h3 className="text-[14px] md:text-base font-medium">
                Simon Adams
              </h3>

              <p className="text-[10px] text-[#6d6e76] mt-1">CTO</p>
            </div>

            <div className="bg-white text-center px-5 py-6 md:py-7">
              <img
                src={mannn}
                alt="Paul Jones"
                className="w-[84px] h-[84px] md:w-[92px] md:h-[92px] mx-auto object-cover rounded-full mb-4"
              />

              <h3 className="text-[14px] md:text-base font-medium">
                Paul Jones
              </h3>

              <p className="text-[10px] text-[#6d6e76] mt-1">Design Lead</p>
            </div>

            <div className="bg-white text-center px-5 py-6 md:py-7">
              <img
                src={mannnn}
                alt="Sara Hardin"
                className="w-[84px] h-[84px] md:w-[92px] md:h-[92px] mx-auto object-cover rounded-full mb-4"
              />

              <h3 className="text-[14px] md:text-base font-medium">
                Sara Hardin
              </h3>

              <p className="text-[10px] text-[#6d6e76] mt-1">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
