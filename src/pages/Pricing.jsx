import { useState } from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const [open, setOpen] = useState(0);

  const questions = [
    {
      question: "How much time does it take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      question: "What is your class naming convention?",
      answer: "We use a simple and organized naming convention.",
    },
    {
      question: "How do we communicate?",
      answer: "We communicate through online meetings and messages.",
    },
    {
      question: "I have a bigger project. Can you handle it?",
      answer: "Yes, we can discuss your project and find the best solution.",
    },
    {
      question: "What is your class naming convention?",
      answer: "Our code structure is clean and easy to understand.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#f7f7f7] px-5 py-16 font-sans md:px-10 lg:px-[8%]">
      {/* PRICING */}
      <section className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#282b3d] md:text-4xl">
            Our Pricing Plans
          </h1>

          <p className="mx-auto max-w-[500px] text-sm leading-7 text-gray-500">
            When you are ready to get your outstanding Website, we are ready
            to help you bring your design to the next level.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* CARD 1 */}
          <div className="flex min-h-[500px] w-full max-w-[320px] flex-col rounded bg-white p-8 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold text-[#282b3d]">
              $299{" "}
              <span className="text-xs font-normal text-gray-500">
                Per Design
              </span>
            </h2>

            <h3 className="mb-4 text-lg font-semibold text-[#282b3d]">
              Landing Page
            </h3>

            <p className="mb-7 text-xs leading-6 text-gray-500">
              When you are ready to get your outstanding prototype in Figma.
            </p>

            <ul className="space-y-4 text-sm text-gray-500">
              <li>▶ All fixed links</li>
              <li>▶ Own customization</li>
              <li>▶ Chat support</li>
              <li>▶ Unlimited users</li>
            </ul>

            <Link to="/contact" className="mt-auto pt-8">
              <button className="h-11 w-[150px] rounded-full bg-[#282b3d] text-sm text-white transition hover:-translate-y-1">
                Get started
              </button>
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="flex min-h-[500px] w-full max-w-[320px] flex-col rounded bg-[#30345f] p-8 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold text-white">
              $399{" "}
              <span className="text-xs font-normal text-[#d1d2e0]">
                Multi Design
              </span>
            </h2>

            <h3 className="mb-4 text-lg font-semibold text-white">
              Website Page
            </h3>

            <p className="mb-7 text-xs leading-6 text-[#d1d2e0]">
              When you are ready to get your outstanding Website.
            </p>

            <ul className="space-y-4 text-sm text-[#d1d2e0]">
              <li>▶ All fixed links</li>
              <li>▶ Own customization</li>
              <li>▶ Chat support</li>
              <li>▶ Unlimited users</li>
            </ul>

            <Link to="/contact" className="mt-auto pt-8">
              <button className="h-11 w-[150px] rounded-full bg-[#ffd76a] text-sm text-[#282b3d] transition hover:-translate-y-1">
                Get started
              </button>
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="flex min-h-[500px] w-full max-w-[320px] flex-col rounded bg-white p-8 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold text-[#282b3d]">
              $499{" "}
              <span className="text-xs font-normal text-gray-500">
                Per Design
              </span>
            </h2>

            <h3 className="mb-4 text-lg font-semibold text-[#282b3d]">
              Complex Project
            </h3>

            <p className="mb-7 text-xs leading-6 text-gray-500">
              When you are ready to get your outstanding Figma.
            </p>

            <ul className="space-y-4 text-sm text-gray-500">
              <li>▶ All fixed links</li>
              <li>▶ Own customization</li>
              <li>▶ Chat support</li>
              <li>▶ Optimized hosting</li>
              <li>▶ Assured usage</li>
              <li>▶ Fast and help</li>
            </ul>

            <Link to="/contact" className="mt-auto pt-8">
              <button className="h-11 w-[150px] rounded-full bg-[#282b3d] text-sm text-white transition hover:-translate-y-1">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* LEFT */}
        <div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#303348]">
            Frequently
            <br />
            asked questions
          </h2>

          <Link
            to="/contact"
            className="text-xs text-[#5651a8] transition hover:underline"
          >
            Contact us For More Info
          </Link>
        </div>

        {/* QUESTIONS */}
        <div className="w-full">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300"
            >
              <div
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex min-h-[65px] cursor-pointer items-center gap-4 text-sm text-[#3d4050]"
              >
                <span className="font-bold text-[#5552aa]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.question}</span>

                <span className="ml-auto text-xl">
                  {open === index ? "×" : "+"}
                </span>
              </div>

              {open === index && (
                <p className="pb-5 pl-10 text-xs leading-6 text-gray-500">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Pricing;