import type React from "react";
import type { RefObject } from "react";
import { Accordion, Figure } from "react-bootstrap";
import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
    SiExpress,
    SiGithub,
    SiMongodb,
    SiMysql,
    SiPostman,
} from "react-icons/si";

interface SkillPageProp {
    refProp: RefObject<HTMLElement | null>;
}
const SkillPage: React.FC<SkillPageProp> = ({ refProp }) => {
    return (
        <section
            ref={refProp}
            className="container-fluid text-dark w-100 vh-100 bg-dark py-3 d-flex flex-column"
        >
                <h2 className="display-5 fw-semibold mb-3 text-light"> Skills</h2>
            <div className="mt-4">
                <Accordion className="custom-accordion">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Frontend</Accordion.Header>
                                <Accordion.Body className=" d-flex justify-content-around">
                                    {/* <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by iconsimple - Flaticon</a> */}
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/html.png"/> */}
                                        <FaHtml5
                                            color="rgb(238, 119, 22)"
                                            size={50}
                                            className="mb-2"
                                        />
                                        <Figure.Caption>HTML 5</Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/text.png"/> */}
                                        <FaCss3Alt
                                            size={50}
                                            color="rgb(0, 4, 216)"
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            CSS 3
                                        </Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/js.png"/> */}
                                        <RiJavascriptFill
                                            color="rgb(241, 245, 2)"
                                            size={50}
                                            className=" mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            JavaScript
                                        </Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        <FaReact
                                            size={50}
                                            className="mb-2"
                                            color="rgb(17, 201, 214)"
                                        />
                                        <Figure.Caption className="text-center">
                                            React js
                                        </Figure.Caption>
                                    </Figure>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Backend</Accordion.Header>
                                <Accordion.Body className=" d-flex justify-content-around">
                                    <Figure>
                                        <FaNode
                                            color="rgb(3, 146, 10)"
                                            size={50}
                                            className="mb-2"
                                        />
                                        <Figure.Caption>Node js</Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/text.png"/> */}
                                        <SiExpress
                                            size={48}
                                            color=" rgb(243, 239, 7)"
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            Express js
                                        </Figure.Caption>
                                    </Figure>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Database</Accordion.Header>
                                <Accordion.Body className=" d-flex justify-content-around">
                                    <Figure>
                                        <SiMongodb
                                            color="rgb(3, 146, 10)"
                                            size={52}
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            MongoDB
                                        </Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/text.png"/> */}
                                        <SiMysql
                                            size={50}
                                            color=" rgb(4, 61, 184)"
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            SQL
                                        </Figure.Caption>
                                    </Figure>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Tools</Accordion.Header>
                                <Accordion.Body className=" d-flex justify-content-around">
                                    <Figure>
                                        <FaGitAlt
                                            color="rgb(240, 96, 0)"
                                            size={50}
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            Git
                                        </Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/text.png"/> */}
                                        <SiGithub
                                            size={48}
                                            color=" rgb(255, 255, 255)"
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            GitHub
                                        </Figure.Caption>
                                    </Figure>
                                    <Figure>
                                        {/* <Figure.Image width={50} height={50} src="/images/text.png"/> */}
                                        <SiPostman
                                            size={48}
                                            color=" rgb(250, 112, 0)"
                                            className="mb-2"
                                        />
                                        <Figure.Caption className="text-center">
                                            Postman
                                        </Figure.Caption>
                                    </Figure>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                </Accordion>
            </div>
        </section>
    );
};

export default SkillPage;
