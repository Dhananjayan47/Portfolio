import type { RefObject } from "react";
import { Button } from "react-bootstrap";
import { FaCopy } from "react-icons/fa6";

interface ContactPageProp {
    refProp: RefObject<HTMLElement | null>;
}

const ContactPage: React.FC<ContactPageProp> = ({ refProp }) => {
    const mobile = "7010436738";
    const email = "dhananjayan.official47@gmail.com";
    const linkedIn = "www.linkedin.com/in/dhananjayan-offi";
    const github = "https://github.com/Dhananjayan47/";

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
    };

    return (
        <section
            ref={refProp}
            className=" custom-card container-fluid text-dark w-100 px-sm-5  pt-5 vh-100 bg-dark-subtle"
        >
            <div className="h-100 d-flex flex-column justify-content-start pt-3">
                <h2 className="display-5 fw-semibold mb-3">Get in Touch </h2>
                <div className=" custom-bg d-flex justify-content-between align-items-center border border-3 border-dark p-2 mb-2 rounded">
                    <p className="mb-0">Mobile Number : {mobile}</p>{" "}
                    <Button
                        variant="outline-dark"
                        onClick={() => copyToClipboard(mobile)}
                    >
                        <FaCopy />
                    </Button>
                </div>
                <div className=" custom-bg d-flex justify-content-between align-items-center border border-3 border-dark p-2 mb-2 rounded">
                    {" "}
                    <p className="mb-0">Email : {email}</p>{" "}
                    <Button
                        variant="outline-dark"
                        onClick={() => copyToClipboard(email)}
                    >
                        <FaCopy />
                    </Button>{" "}
                </div>
                <div className=" custom-bg d-flex justify-content-between align-items-center border border-3 border-dark p-2 mb-2 rounded">
                    {" "}
                    <p className="mb-0">Linkedin : {linkedIn}</p>{" "}
                    <Button
                        variant="outline-dark"
                        onClick={() => copyToClipboard(linkedIn)}
                    >
                        <FaCopy />
                    </Button>{" "}
                </div>
                <div className=" custom-bg d-flex justify-content-between align-items-center border border-3 border-dark p-2 mb-2 rounded">
                    {" "}
                    <p className="mb-0">GitHub : {github}</p>{" "}
                    <Button
                        variant="outline-dark"
                        onClick={() => copyToClipboard(github)}
                    >
                        <FaCopy />
                    </Button>{" "}
                </div>
                <section id="resume" className="container-fluid py-4">
                    <h2 className="display-5 fw-semibold mb-3">Resume</h2>

                    <p>You can view or download my resume below.</p>

                    <div className="d-flex gap-3">
                        <a
                            href="/resume/Dhananjayan_resume.pdf"
                            target="_blank"
                            className="btn btn-outline-dark"
                        >
                            View Resume
                        </a>

                        <a
                            href="/resume/Dhananjayan_resume.pdf"
                            download
                            className="btn btn-dark"
                        >
                            Download Resume
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ContactPage;
