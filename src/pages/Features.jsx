import React from "react";
import { PenSquare, Smartphone, Users, Plus, X } from "lucide-react";
import photo1 from "../assets/home/photo1.png";
import photo2 from "../assets/home/photo2.png";
import photo3 from "../assets/home/photo3.png";
import photo4 from "../assets/home/photo4.png";



// Solid gear glyph (matches the reference design better than lucide's outline Settings icon)
function GearIcon({ size = 48, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M19.14,12.94a7.14,7.14,0,0,0,.05-.94,7.14,7.14,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.3,7.3,0,0,0-1.62-.94L14.5,2.5a.5.5,0,0,0-.5-.5H10a.5.5,0,0,0-.5.5l-.38,2.65a7.3,7.3,0,0,0-1.62.94l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.64L4.63,11a7.14,7.14,0,0,0,0,1.88L2.52,14.53a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.3,7.3,0,0,0,1.62.94L9.5,21.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5l.38-2.65a7.3,7.3,0,0,0,1.62-.94l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>
  );
}

// lucide-react dropped brand/logo icons, so these are small local SVGs instead.
function FacebookIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.3h-3.1V7.6c0-.9.3-1.6 1.7-1.6h1.5V3.1C15.9 3 15 3 13.9 3c-2.5 0-4.2 1.5-4.2 4.3v2.4H7v3.3h2.7v8h3.8z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.6a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 20h-3.3v-6.2c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V20h-3.3s.1-10.6 0-11.6h3.3v1.6c.4-.7 1.2-1.7 3-1.7 2.2 0 3.9 1.5 3.9 4.6V20z" />
    </svg>
  );
}

const colors = {
  navy: "#1c1550",
  yellow: "#f7c873",
  grayBg: "#f4f6fb",
  cream: "#faf3e6",
  textGray: "#6b6d80",
  blueAccent: "#4353ff",
};

function BenefitCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl p-8" style={{ backgroundColor: colors.grayBg }}>
      <div
        className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5"
        style={{ color: colors.blueAccent }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: colors.textGray }}>
        {text}
      </p>
    </div>
  );
}

function FeatureRow({ eyebrow, title, text, reverse, image, imageAlt }) {
  const media = image ? (
    // Put your real photo path/URL in the `image` prop passed to <FeatureRow />
    <img
      src={image}
      alt={imageAlt || title}
      className="rounded-2xl w-full aspect-[4/3] object-cover"
    />
  ) : (
    <div
      className="rounded-2xl aspect-[4/3] flex items-center justify-center text-sm"
      style={{
        background: "linear-gradient(135deg, #e4e6f0, #c9cce0)",
        color: "#8b8dab",
      }}
    >
      photo
    </div>
  );
  const textBlock = (
    <div className="max-w-md">
      <div className="text-sm font-bold mb-3" style={{ color: colors.textGray }}>
        {eyebrow}
      </div>
      <h2 className="text-3xl leading-tight font-bold mb-4">{title}</h2>
      <p className="text-[15px] leading-relaxed" style={{ color: colors.textGray }}>
        {text}
      </p>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-20">
      {reverse ? (
        <>
          {media}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {media}
        </>
      )}
    </div>
  );
}

function FaqItem({ num, question, answer, open }) {
  return (
    <div
      className="border-b py-6 grid grid-cols-[40px_1fr_24px] items-start gap-4"
      style={{ borderColor: "#e6e6ee" }}
    >
      <div className="font-bold text-sm" style={{ color: colors.blueAccent }}>
        {num}
      </div>
      <div>
        <div className="text-base font-semibold">{question}</div>
        {open && answer && (
          <div className="text-sm leading-relaxed mt-3" style={{ color: colors.textGray }}>
            {answer}
          </div>
        )}
      </div>
      <div style={{ color: colors.textGray }}>
        {open ? <X size={20} /> : <Plus size={20} />}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="bg-white text-slate-900" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* HERO */}
      <section className="px-6 py-24" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-white text-5xl font-bold leading-tight mb-5">
              All the features
              <br />
              you need
            </h1>
            <p className="max-w-md mb-8 leading-relaxed" style={{ color: "#c9c8e0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="font-bold px-8 py-4 rounded-lg text-sm"
              style={{ backgroundColor: colors.yellow, color: colors.navy }}
            >
              View Pricing
            </button>
          </div>

          <div className="relative min-h-[320px] flex items-center justify-center">
            {/* Main browser-style card, top-right */}
            <div
              className="absolute top-0 right-0 w-[85%] rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="flex gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f5b969" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f28fb0" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#6fe0d0" }} />
              </div>

              <div className="flex gap-4">
                <div className="grid grid-cols-2 gap-2" style={{ width: "48%" }}>
                  <div className="rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", height: 46 }} />
                  <div className="rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", height: 46 }} />
                  <div className="rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", height: 30 }} />
                  <div className="rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)", height: 30 }} />
                </div>
                <div className="flex-1 flex flex-col gap-2 justify-center">
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "#f5b969", width: "55%" }} />
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)", width: "82%" }} />
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)", width: "70%" }} />
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "#6fb8e0", width: "60%" }} />
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)", width: "45%" }} />
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: "#f28fb0", width: "38%" }} />
                </div>
              </div>
            </div>

            {/* Smaller translucent card, bottom-left, overlapping */}
            <div
              className="absolute bottom-0 left-0 w-[42%] rounded-xl p-4"
              style={{ backgroundColor: "rgba(28,21,80,0.55)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(2px)" }}
            >
              <div className="flex flex-col gap-2">
                <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.4)", width: "80%" }} />
                <div className="h-1.5 rounded-full" style={{ backgroundColor: "#6fb8e0", width: "55%" }} />
                <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.4)", width: "65%" }} />
                <div className="h-1.5 rounded-full" style={{ backgroundColor: "#f28fb0", width: "40%" }} />
                <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.4)", width: "70%" }} />
              </div>
            </div>

            {/* Gear icon, bottom-right, standalone */}
            <GearIcon
              className="absolute -bottom-2 right-0"
              size={64}
              color={colors.yellow}
            />
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-wrap items-center justify-between gap-6">
        <div>
          <b className="text-3xl block">100.000+</b>
          <span className="text-sm" style={{ color: colors.textGray }}>
            Figma Users
          </span>
        </div>
        <div className="flex flex-wrap gap-9 items-center font-semibold text-sm opacity-75">
          <div>◆ logoipsum</div>
          <div>◐ logoipsum</div>
          <div>⊘ logoipsum</div>
          <div>〰 logoipsum</div>
          <div>◱ logoipsum</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-center text-4xl font-bold max-w-xl mx-auto mb-10 leading-snug">
          The benefits of working with our team
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <BenefitCard
            icon={<PenSquare size={20} />}
            title="Customize with ease"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />
          <BenefitCard
            icon={<Smartphone size={20} />}
            title="Perfectly Responsive"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />
          <BenefitCard
            icon={<Users size={20} />}
            title="Friendly Support"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />
        </div>
      </section>

      {/* FEATURE ROW 1 */}
      <section className="max-w-6xl mx-auto px-6">
        <FeatureRow
          eyebrow="Use Client-first"
          title="Top agencies and freelancers around the world use Client-first"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
          image={photo1}
          imageAlt="Two people discussing a project on a sofa"
        />
      </section>

      {/* FEATURE ROW 2 */}
      <section style={{ backgroundColor: colors.grayBg }}>
        <div className="max-w-6xl mx-auto px-6">
          <FeatureRow
            reverse
            eyebrow="Free Revision Rounds"
            title="Get free Revisions and one week of free maintenance"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
            image={photo2}
            imageAlt="Person working at an office desk"
          />
        </div>
      </section>

      {/* FEATURE ROW 3 */}
      <section className="max-w-6xl mx-auto px-6">
        <FeatureRow
          eyebrow="24/7 Support"
          title="Working with us, you will be getting 24/7 priority support"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
          image={photo3}
          imageAlt="Person on a headset at a desk"
        />
      </section>

      {/* FEATURE ROW 4 */}
      <section style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <FeatureRow
            reverse
            eyebrow="Quick Delivery"
            title="Guaranteed 1 week delivery for standard five pager website"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
            image={photo4}
            imageAlt="Close-up of hands typing on a laptop"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Frequently
              <br />
              asked question
            </h2>
            <a href="#" className="text-sm font-semibold" style={{ color: colors.blueAccent }}>
              Contact us for more info
            </a>
          </div>
          <div>
            <FaqItem
              num="01"
              open
              question="How much time does it take?"
              answer="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
            />
            <FaqItem num="02" question="What is your class naming convention?" />
            <FaqItem num="03" question="How do we communicate?" />
            <FaqItem num="04" question="I have a bigger project. Can you handel it?" />
            <FaqItem num="05" question="What is your class naming convention?" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: brand + contact box */}
          <div>
            <div className="text-white text-2xl font-bold mb-4">{"{Finsweet"}</div>
            <p className="max-w-xs leading-relaxed mb-8" style={{ color: "#c9c8e0" }}>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div
              className="rounded-xl p-6 flex flex-wrap gap-8"
              style={{ backgroundColor: colors.yellow }}
            >
              <div>
                <div className="font-semibold text-sm mb-1" style={{ color: colors.navy }}>
                  Email me at
                </div>
                <div className="text-sm" style={{ color: colors.navy }}>
                  contact@website.com
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm mb-1" style={{ color: colors.navy }}>
                  Call us
                </div>
                <div className="text-sm" style={{ color: colors.navy }}>
                  0927 6277 28525
                </div>
              </div>
            </div>
          </div>

          {/* Right: Let's talk + socials */}
          <div>
            <h2 className="text-white text-4xl font-bold mb-4">Lets Talk!</h2>
            <p className="max-w-md leading-relaxed mb-6" style={{ color: "#c9c8e0" }}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}