import Hero from "./pages/HeroPage";
import NavBar from "./components/NavBar";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectPage";

import { IconContext } from "react-icons";
import ContactPage from "./pages/ContactPage";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
// import { log } from "console";

export default function App() {
  // gsap.registerPlugin(ScrollTrigger);
  
  const SECTION_PADDING = "py-16 md:py-24 px-4 sm:px-6 lg:px-8 z-10";
  const GLOBAL_TEXT_COLOR = "text-slate-300";
  const divRef = useRef(null);
  const divPluseRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".animation-pluse", {
        scale: 1.05,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.35,
        ease: "sine.inOut",
      });
    },
    { scope: divPluseRef },
  );
  return (
    <IconContext.Provider
      value={{
        size: "1.5rem",
        className:
          "transition-colors duration-200 text-slate-400 group-hover:text-blue-500",
      }}
    >
      {/* Root Layout Wrapper */}
      <div
        ref={divPluseRef}
        className={`min-h-screen bg-[#030612] ${GLOBAL_TEXT_COLOR} font-sans antialiased relative selection:bg-blue-500/30 scroll-smooth`}
      >
        <div className="animation-pluse h-48 w-48 bg-slate-800/95 rounded-full top-0 -left-9 shadow fixed"></div>
        <div className="animation-pluse h-48 w-48 bg-slate-700/80 backdrop-blur-2xl rounded-full -bottom-15 -right-18 shadow fixed"></div>
        <main
          ref={divRef}
          className="max-w-6xl mx-auto divide-y divide-[#242C3D]/30"
        >
          <NavBar />
          {/* Section Components wrapped in standardized layout containers */}
          <section id="home" className={SECTION_PADDING}>
            <Hero />
          </section>

          <section id="about" className={SECTION_PADDING}>
            <About />
          </section>

          <section id="projects" className={SECTION_PADDING}>
            <Projects />
          </section>

          <section id="contact" className={SECTION_PADDING}>
            <ContactPage />
          </section>
        </main>
      </div>
    </IconContext.Provider>
  );
}
