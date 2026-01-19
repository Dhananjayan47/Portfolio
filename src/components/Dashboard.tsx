import React, { useRef } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ProjectsPage from "./ProjectsPage";
import SkillPage from "./SkillPage";
import ProjectOutputs from "./ProjectOutputs";
import ContactPage from "./ContactPage";

const Dashboard:React.FC = () => {
    const homeRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);
    const projectRef = useRef<HTMLElement | null>(null);
    const skillRef = useRef <HTMLElement | null>(null);
    const outputRef = useRef <HTMLElement | null>(null);
    const contactRef = useRef <HTMLElement | null>(null);
    
    return (
        <>
            <NavBar homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} skillRef={skillRef} outputRef={outputRef} contactRef={contactRef}/>
            <HomePage refProp={homeRef} aboutRef={aboutRef} contactRef={contactRef}/>
            <AboutPage refProp={aboutRef}/>
            <SkillPage refProp={skillRef}/>
            <ProjectOutputs refProp={outputRef}/>
            <ProjectsPage refProp={projectRef}/>
            <ContactPage refProp={contactRef}/>
        </>
    );
};

export default Dashboard;
