import React, { useRef } from "react";
import { useSectionDivAnimation, useSectionTextAnimation } from "../hooks/useSectionAnimation";

type TechItem = { name: string };

const ProjectsInfo: {
  name: string;
  description: string;
  image: string;
  liveLink: string,
  techUsed: TechItem[];
}[] = [
  {
    name: "Real-time Chat App",
    description:
    "A scalable chat application built with React and Node.js, featuring WebSocket integration for real-time communication and a responsive design for seamless user experience across devices.",
    image: "/images/GroupMusicDashboard.png",
    liveLink:"https://group-music.vercel.app/",
    techUsed: [
      { name: "HTML" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Bootstrap" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "REST API" },
        { name: "Socket.io" },
      ],
    },
  {
    name: "Expense Tracker",
    description:
    "An expense tracker site built with the MERN stack, allowing users to log expenses, categorize spending, and monitor their finances with a responsive dashboard.",
    image: "/images/ExpenseTrackerUI.png",
    liveLink: "https://expense-tracker-mern-steel-mu.vercel.app/",
    techUsed: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JS" },
      { name: "Bootstrap" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST API" },
    ],
  },
];

type ProjectItem = typeof ProjectsInfo[number];

const ProjectCard: React.FC<ProjectItem> = ({ name, description, image, liveLink, techUsed }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useSectionDivAnimation(divRef);

  return (
    <article
      ref={divRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#161B26] rounded-lg shadow-md overflow-hidden"
    >
      <div className="animate-div w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-1/2 md:h-full object-cover rounded-md shadow-sm"
        />
      </div>
      <div className="animate-div rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">{name}</h2>
        <p className="text-gray-400">{description}</p>
        <p className="py-2">
          Live demo: {" "}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            live demo click here
          </a>
        </p>
        <p>
          Tech Used : {" "}
          {techUsed.map(({ name }) => (
            <span
              key={name}
              className="p-2 mx-1 my-0.5 border rounded-2xl bg-[#161B26] text-slate-300 border-[#242C3D] inline-block font-semibold hover:bg-[#1b2438] hover:cursor-pointer hover:text-slate-50 hover:scale-105 hover:shadow-lg transition-transform duration-200 shadow-md"
            >
              {name}
            </span>
          ))}{" "}
        </p>
      </div>
    </article>
  );
};

const ProjectPage: React.FC = () => {

  const sectionRef= useRef<HTMLElement>(null)
  useSectionTextAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="mx-auto p-8 bg-slate-900 rounded-3xl shadow-xl max-w-4xl">
      <div className="max-w-6xl mx-auto">
        <h1 className="animate-texts text-3xl font-bold mb-8 uppercase">Projects</h1>

        <div className="flex flex-col gap-8">
          {ProjectsInfo.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
