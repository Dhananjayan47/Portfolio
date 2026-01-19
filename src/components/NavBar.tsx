import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import type { RefObject } from "react";

interface NavBarProps {
    homeRef: RefObject<HTMLElement | null>;
    aboutRef: RefObject<HTMLElement | null>;
    projectRef : RefObject<HTMLElement | null>;
    skillRef : RefObject<HTMLElement | null>;
    outputRef : RefObject<HTMLElement | null>
    contactRef : RefObject<HTMLElement | null>
}

const NavBar: React.FC<NavBarProps> = ({ homeRef, aboutRef, projectRef, skillRef, outputRef, contactRef }) => {

    const scrollTo = (ref: RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Navbar bg="primary" data-bs-theme="dark" fixed="top" expand="lg">
            <Container fluid>
                <Navbar.Brand >
                    {" "}
                    Portfolio
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={()=> scrollTo(homeRef)}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={()=>scrollTo(aboutRef)}>
                            About
                        </Nav.Link>
                        <Nav.Link onClick={()=>scrollTo(skillRef)}>
                            Skills
                        </Nav.Link>
                        <Nav.Link onClick={()=>scrollTo(outputRef)}>
                            Outputs
                        </Nav.Link>
                        <Nav.Link onClick={()=>scrollTo(projectRef)}>
                            Projects
                        </Nav.Link>
                        <Nav.Link onClick={()=>scrollTo(contactRef)} >
                            Contact me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
