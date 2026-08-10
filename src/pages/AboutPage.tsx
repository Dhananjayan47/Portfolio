import React,{useRef} from "react";
import TechSection from "./TechSection";
import { useSectionTextAnimation } from "../hooks/useSectionAnimation";
const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useSectionTextAnimation(sectionRef);

  return (
    <section  className=" mx-auto p-8 bg-slate-900 rounded-3xl shadow-xl max-w-4xl   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-3 gap-y-3">
      <div ref={sectionRef} className="md: col-span-1   p-5 flex flex-col justify-center rounded-xl">
        <p className="animate-texts text-3xl font-bold text-left pb-2">ABOUT</p>
        <p className="animate-texts text-md  leading-relaxed">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          I love creating user-friendly applications and solving complex problems through clean, maintainable code.
          With experience in React, TypeScript, and Node.js, I build scalable solutions that make a difference.
          I'm committed to continuous learning and staying updated with the latest industry trends.
          When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
        </p>
        <button className="animate-texts bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-max transition-colors duration-300 ease-in-out hover:scale-95">
          Learn More
        </button>
      </div>
      <TechSection/>
    </section>
  );
};

export default AboutPage;
