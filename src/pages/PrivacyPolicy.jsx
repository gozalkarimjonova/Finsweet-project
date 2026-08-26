import React from "react";

function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-white px-5 py-12">

      <div className="max-w-[900px] mx-auto">

        <h1 className="text-[30px] font-bold text-[#282a3a] mb-6">
          Privacy Policy
        </h1>

        <p className="text-[#777985] text-sm leading-7 mb-8">
          Your privacy is important to us. This Privacy Policy explains how
          we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-bold text-[#282a3a] mb-3">
          Information We Collect
        </h2>

        <p className="text-[#777985] text-sm leading-7 mb-8">
          We may collect information such as your name, email address, subject,
          and message when you contact us through our website.
        </p>

        <h2 className="text-xl font-bold text-[#282a3a] mb-3">
          How We Use Your Information
        </h2>

        <p className="text-[#777985] text-sm leading-7 mb-8">
          We use your information to respond to your questions and provide
          better services.
        </p>

        <h2 className="text-xl font-bold text-[#282a3a] mb-3">
          Data Protection
        </h2>

        <p className="text-[#777985] text-sm leading-7 mb-8">
          We take reasonable steps to protect your personal information from
          unauthorized access or misuse.
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-full bg-[#292a3b] text-white text-sm hover:bg-[#202158] transition"
        >
          Go Back
        </button>

      </div>

    </section>
  );
}

export default PrivacyPolicy;