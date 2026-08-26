import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields!");
      return;
    }

    // Privacy Policy sahifasiga o'tish
    navigate("/privacy-policy");
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[1060px] mx-auto px-5 py-8 pb-16 text-center">

        {/* Avatar */}
        <div className="w-[43px] h-[43px] mx-auto mb-4 rounded-full bg-[#6e829e] border-4 border-white shadow-lg flex items-center justify-center text-white text-[19px]">
          D
        </div>

        <h1 className="text-[30px] font-bold text-[#282a3a]">
          Contact Us
        </h1>

        <p className="mt-3 mb-9 text-[#777985] text-[10px] leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[592px] mx-auto p-[35px_43px_39px] bg-[#f7f8fc] border border-[#2494ff] text-left"
        >

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-[18px] mb-4">

            <div>
              <label className="block mb-2 text-[11px] text-black">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full h-9 px-4 border border-[#dedfe7] rounded-md bg-white outline-none text-[10px] focus:border-[#2494ff]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[11px] text-black">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-9 px-4 border border-[#dedfe7] rounded-md bg-white outline-none text-[10px] focus:border-[#2494ff]"
              />
            </div>

          </div>

          {/* Subject */}
          <div className="grid grid-cols-2 gap-[18px] mb-4">

            <div>
              <label className="block mb-2 text-[11px] text-black">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Provide context"
                value={form.subject}
                onChange={handleChange}
                className="w-full h-9 px-4 border border-[#dedfe7] rounded-md bg-white outline-none text-[10px] focus:border-[#2494ff]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[11px] text-black">
                Subject
              </label>

              <select
                className="w-full h-9 px-4 border border-[#dedfe7] rounded-md bg-white outline-none text-[10px]"
              >
                <option>Select Subject</option>
                <option>Website</option>
                <option>Design</option>
                <option>Development</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-[11px] text-black">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Write your question here"
              value={form.message}
              onChange={handleChange}
              className="w-full h-[77px] p-4 resize-none border border-[#dedfe7] rounded-md bg-white outline-none text-[10px] focus:border-[#2494ff]"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="mt-[17px] w-[142px] h-9 rounded-full bg-[#292a3b] text-white text-[10px] hover:bg-[#202158] transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;