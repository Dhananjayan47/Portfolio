import { Button } from "react-bootstrap";

import type { RefObject } from "react";
import type React from "react";

interface HomePageProps {
    refProp : RefObject<HTMLElement | null >;
    aboutRef : RefObject<HTMLElement |null>;
    contactRef : RefObject<HTMLElement |null>;

}
const scrollTo = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
};
const HomePage:React.FC<HomePageProps> = ({ refProp, aboutRef, contactRef }) => {
    return (
        <section ref={refProp} className="container-fluid text-light w-100 vh-100 bg-dark pt-5 d-flex flex-column justify-content-center">
            <section className="p-2 ">
                <p className=" display-3 fw-semibold">Dhananjayan </p>
                <p className=" display-5 fw-normal">
                    Mern stack developer | fresher
                </p>
                <p className=" display-6">
                    "I'm a fresher growing developer ready to express my code
                    life
                </p>
            </section>
            <section className="p-2 d-flex flex-column flex-sm-row">
                <Button className=" mb-2 mb-sm-0 me-sm-3" onClick={()=>scrollTo(aboutRef)}>About me</Button>
                <Button variant="outline-light" onClick={()=>scrollTo(contactRef)}> Contact me</Button>
            </section>
        </section>
    );
};

export default HomePage;
