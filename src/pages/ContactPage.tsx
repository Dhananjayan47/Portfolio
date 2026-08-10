import React, { useRef } from "react";
import { useSectionTextAnimation,useSectionDivAnimation } from "../hooks/useSectionAnimation";

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  useSectionTextAnimation(sectionRef);
 useSectionDivAnimation(divRef)

const userInfo = [
  { key: "Email", value: "dhananjayan.official47@gmail.com" },
  { key: "Phone", value: "7010436738" },
  { key: "Location", value: "Chennai, Tamilnadu." },
  { key: "LinkedIn", value: "https://www.linkedin.com/in/dhananjayan-offi" },
  {key : "GitHub", value:"https://github.com/Dhananjayan47/"}
];
  return (
    <section className="sm:max-w-4xl mx-auto p-8 bg-slate-900 rounded-3xl shadow-xl text-white">
      <div ref={sectionRef}>
        <h1 className="animate-texts text-4xl font-extrabold mb-6 uppercase tracking-wide">
          Contact Me
        </h1>
        <p className="animate-texts text-gray-300 mb-8 leading-relaxed">
          Feel free to reach out to me for any inquiries, collaborations, or
          just to say hello! You can contact me via email, phone, or by filling
          out the form below.
        </p>
      </div>

      <div ref={divRef} className="grid gap-8 lg:grid-cols-2 mb-10">
        {userInfo.map((item) => (
          <div
            key={item.key}
            className="animate-div rounded-2xl bg-slate-800 p-6 border border-slate-700"
          >
            <h2 className="text-xl font-semibold">{item.key}</h2>
            {item.key === "LinkedIn" || item.key === "GitHub" ? (
              <a
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-blue-400 hover:text-blue-300 hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-gray-300">{item.value}</p>
            )}
          </div>
        ))}

        <div className="animate-div rounded-2xl bg-slate-800 p-6 border border-slate-700 space-y-4">
          <h2 className="text-xl font-semibold">Resume</h2>
          <div className="flex gap-4">
            <a
              type="button"
              className="flex-1 rounded-2xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              href="/resume/Dhananjayan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
            <a
              type="button"
              className="flex-1 rounded-2xl bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-green-500"
              href="/resume/Dhananjayan_resume.pdf"
              download="Dhananjayan_resume.pdf"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
