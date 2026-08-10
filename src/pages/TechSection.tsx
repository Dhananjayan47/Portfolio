import React,{useRef} from "react";
import {useSectionTextAnimation} from "../hooks/useSectionAnimation";
import { IconContext } from "react-icons";
import { SiReact, SiPostgresql,SiMongodb,SiMysql,SiSocketdotio,SiExpress  } from "react-icons/si";
import { RiCss3Fill,RiTailwindCssFill,RiBootstrapLine, RiHtml5Line} from "react-icons/ri";
import { FaNode,FaNodeJs, FaNpm } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
const TechSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useSectionTextAnimation(sectionRef);

  const TECH_STACK = [
    { name: "HTML 5", Icon: RiHtml5Line},
    { name: "CSS 3", Icon: RiCss3Fill },
    { name: "Tailwind CSS", Icon: RiTailwindCssFill },
    { name: "Bootstrap", Icon: RiBootstrapLine },
    { name: "JavaScript", Icon: FaNodeJs },
    { name: "TypeScript", Icon: TbBrandTypescript },
    { name: "Express.js", Icon: SiExpress },
    { name: "React", Icon: SiReact },
    { name: "Node.js",Icon: FaNode, },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: SiMysql },
    { name: "PostgreSQL Basics", Icon: SiPostgresql },
    { name: "Socket.io", Icon: SiSocketdotio },
    { name: "Npm", Icon: FaNpm}
  ];


  return (
    <div ref={sectionRef} className="md: col-span-1 lg:col-span-2 rounded-xl">
      <p className="animate-texts text-3xl font-bold text-left p-5">SKILLS</p>
      <IconContext.Provider value={{ size: "3em",color: "text-slate-300" }}>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECH_STACK.map(({name,Icon})=>(
               <div key={name} className="animate-texts group flex items-center gap-3 p-4 bg-[#161B26] hover:bg-[#1b2438] border border-[#242C3D] rounded-lg">
            <Icon />
            <span className="text-slate-300 font-medium group-hover:text-white transition-all group-hover:scale-105 duration-200">
              {name}
            </span>
          </div>
            ))}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default TechSection;
