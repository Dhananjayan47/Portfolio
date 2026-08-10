import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { CodeSnippetCard } from "../components/CodeSnippetCard";

gsap.registerPlugin(SplitText, useGSAP);

const HeroPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const headline = sectionRef.current.querySelector("h1");
    const paragraph = sectionRef.current.querySelector("p");
    const buttons = gsap.utils.toArray<HTMLButtonElement>(
      sectionRef.current.querySelectorAll("button")
    );
    const infoCard = sectionRef.current.querySelector(".info-card");

    if (!headline) return;

    const split = new SplitText(headline, { type: "chars,words" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(split.chars, {
      y: 120,
      opacity: 0,
      duration: 0.7,
      stagger: 0.04,
    })
    .from(paragraph, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
    .from(buttons, { 
    y: 20, 
    opacity: 0, 
    duration: 0.5, 
    stagger: 0.2,
    clearProps: "all" 
  }, "-=0.3");

    if (infoCard) {
      tl.from(infoCard, { scale: 0.95, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.35");
    }

    return () => split.revert();
  }, { scope: sectionRef });


  const handleScroll = (href: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    const targetItem = href.replace('#', '');
    const element = document.getElementById(targetItem);

    if(element){

      const elementPosition = element.getBoundingClientRect().top + window.screenY

       console.log(elementPosition)
        console.log(element.getBoundingClientRect().top);
        console.log(window.scrollY);
        
      window.scrollTo({
        top:elementPosition,
        behavior:"smooth"
      })
    }
  }

  return (
    <section ref={sectionRef} className="mx-auto bg-slate-900 rounded-3xl shadow-xl max-w-4xl grid grid-cols-1 lg:grid-cols-3 p-10 gap-6 text-white">
      <div className="box lg:col-span-2 flex flex-col justify-center">
        <h1 className="text-5xl font-bold leading-tight ">
          Building Scalable, Real-time Web Apps
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-slate-300">
          Full-stack developer building robust REST APIs, real-time web experiences, and relational database architectures.
        </p>
        <div className="mt-6 flex gap-3 z-10">
          <button onClick={handleScroll('#projects')} className="bg-blue-600 px-4 py-3 rounded-md border border-blue-600 transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-900">
            View Projects
          </button>
          <button onClick={handleScroll('#contact')} className="bg-green-500 px-4 py-3 rounded-md border border-green-500 transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-900">
            Contact Me
          </button>
        </div>
      </div>

      <div className="hidden lg:flex info-card items-center justify-center col-span-1 bg-gray-700 rounded-xl shadow-lg ">
        {/* <p className="text-sm leading-relaxed text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi pariatur,
          doloribus aperiam illo perspiciatis voluptatum vero ab architecto esse.
        </p> */}
        <CodeSnippetCard/>
      </div>
    </section>
  );
};

export default HeroPage;