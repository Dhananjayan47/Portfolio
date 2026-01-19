import type React from "react";
import type { RefObject } from "react";
import { Button } from "react-bootstrap";

interface ProjectsPageProps {
    refProp: RefObject<HTMLElement | null>;
}
const ProjectsPage: React.FC<ProjectsPageProps> = ({ refProp }) => {
    return (
        <section
            ref={refProp}
            className="container-fluid text-light w-100 vh-100 py-5 bg-dark "
        >
            <section className=" pt-3 h-100 custom-scroll overflow-x-hidden">
                <h3>Real Time Projects </h3>
                <div className="row g-1 d-flex">
                    <div className=" col-12 col-sm-6 flex-fill ">
                        <div className="custom-card col-sm border me-md-2 rounded p-1 mb-1">
                            <div>
                                <h5>Group music lister</h5>
                                <p>
                                    Real-time project listen music ,playback
                                    controls with friends and family .Built by
                                    using MERN ,Socket.io
                                </p>
                            </div>
                            <div className=" d-flex flex-wrap mb-1">
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    MongoDb
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Express js
                                </span>
                                <span className="bg-info bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    React js
                                </span>
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Node js
                                </span>
                                <span className="bg-primary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Bootstrap
                                </span>
                                <span className="bg-danger bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Socket.io
                                </span>
                                <span className="bg-secondary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Render
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Vercel
                                </span>
                            </div>
                            <div className="w-100 d-flex column-gap-1">
                            <Button
    as="a"
    href="https://group-music.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    variant="link"
    className="custom-btn text-white text-decoration-none flex-fill"
>
    View Demo
</Button>

                                <Button
                                   as="a"
                                   href="https://github.com/Dhananjayan47/Group-Music"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   variant="link"
                                   className=" text-decoration-none text-white border btn btn-outline-light flex-fill"
                                >
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-6 flex-fill">
                        <div className="custom-card col-sm border me-md-2 rounded p-1 mb-1">
                            <div>
                                <h5>Expense Tracker</h5>
                                <p>
                                    Real-time project to know the money expenses
                                    and helps to handle money using MERN stack with interactive UI
                                </p>
                            </div>
                            <div className=" d-flex flex-wrap mb-1">
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    MongoDb
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Express js
                                </span>
                                <span className="bg-info bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    React js
                                </span>
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Node js
                                </span>
                                <span className="bg-primary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Bootstrap
                                </span>
                                <span className="bg-secondary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Render
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Vercel
                                </span>
                            </div>
                            <div className="w-100 d-flex column-gap-1">
                            <Button
    as="a"
    href="https://expense-tracker-mern-steel-mu.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    variant="link"
    className="custom-btn text-white text-decoration-none flex-fill"
>
    View Demo
</Button>
                                <Button
                                     as="a"
                                     href="https://github.com/Dhananjayan47/Expense-Tracker-MERN"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     variant="link"
                                     className=" text-decoration-none text-white border btn btn-outline-light flex-fill"
                                >
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Mini Projects </h3>
                <div className="row g-1">
                    <div className="col-12 col-sm-6">
                        <div className="custom-card border rounded p-1 mb-1">
                            <div>
                                <h5>Rock Paper Scissors</h5>
                                <p>
                                    A fun game play with computer , score based
                                    game with good ui and winning effects
                                </p>
                            </div>
                            <div className=" d-flex flex-wrap mb-1">
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    React js
                                </span>
                                <span className="bg-primary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Bootstrap
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Vercel
                                </span>
                            </div>
                            <div className="w-100 d-flex column-gap-1">
                            <Button
    as="a"
    href="https://dhananjayan47.github.io/RockPaperScissors/"
    target="_blank"
    rel="noopener noreferrer"
    variant="link"
    className="custom-btn text-white text-decoration-none flex-fill"
>
    View Demo
</Button>
                                <Button
                                   as="a"
                                   href="https://github.com/Dhananjayan47/RockPaperScissors"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   variant="link"
                                   className=" text-decoration-none text-white border btn btn-outline-light flex-fill"
                                >
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="custom-card border rounded p-1 mb-1">
                            <div>
                                <h5>Naruto Quiz</h5>
                                <p>
                                    A funny quiz game based on world famous
                                    naruto anime with background naruto music
                                </p>
                            </div>
                            <div className=" d-flex flex-wrap mb-1">
                                <span className="bg-success bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    React js
                                </span>

                                <span className="bg-primary bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Bootstrap
                                </span>
                                <span className="bg-warning bg-opacity-50 rounded rounded-2 p-1 m-1">
                                    Vercel
                                </span>
                            </div>
                            <div className="w-100 d-flex column-gap-1">
                            <Button
    as="a"
    href="https://naruto-quiz-game.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    variant="link"
    className="custom-btn text-white text-decoration-none flex-fill"
>
    View Demo
</Button>
                                <Button
                                     as="a"
                                     href="https://github.com/Dhananjayan47/quiz"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     variant="link"
                                     className=" text-decoration-none text-white border btn btn-outline-light flex-fill"
                                >
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProjectsPage;
