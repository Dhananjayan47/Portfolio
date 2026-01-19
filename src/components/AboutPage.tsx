import type React from "react";
import type { RefObject } from "react";
import { Image } from "react-bootstrap";

interface AboutPageProps {
    refProp: RefObject<HTMLElement | null>;
}

const AboutPage: React.FC<AboutPageProps> = ({ refProp }) => {
    return (
        <section
            ref={refProp}
            className=" custom-card container-fluid text-dark w-100 pt-4 vh-100 bg-dark-subtle"
        >
            <section className=" d-flex flex-column w-100 pt-5">
                <div className="d-flex justify-content-center mb-3">
                    <Image
                        src="/images/AboutPageImg.jpg"
                        
                        width={120}
                        
                        rounded
                    />
                </div>

                <div className="flex-grow-1 overflow-y-auto px-3">
                    <h2 className="display-5 fw-semibold mb-3">About Me</h2>
                    <p className="fs-6">
                        I’m a self-taught MERN Stack Developer and a 2025
                        graduate, passionate about building real-world web
                        applications. I enjoy turning ideas into functional,
                        user-friendly products using modern JavaScript
                        technologies. <br />
                        <br />
                        I have worked on practical projects like an Expense
                        Tracker and a Group Music Listener app, along with
                        several mini projects that strengthened my
                        problem-solving skills. <br />
                        <br />
                        As a fresher, I’m highly motivated to learn, grow, and
                        contribute to a collaborative development team while
                        continuously improving my technical skills.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default AboutPage;
