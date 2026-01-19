import type { FC, RefObject } from "react";
import { Carousel, Image } from "react-bootstrap";

interface ProjectOutputsProp{
    refProp:RefObject<HTMLElement | null>
}

const ProjectOutputs: FC<ProjectOutputsProp> = ({refProp}) => {
    return ( <section ref={refProp} className=" custom-card container-fluid text-dark w-100 vh-100 bg-dark-subtle d-flex align-items-center justify-content-center">
       <section className="p-sm-5">
        
            <h2 className=" pb-4"> Project Outputs</h2>
        <Carousel touch data-bs-theme='dark' className=" d-sm-none">
            <Carousel.Item>
                <Image src="/images/GroupMusicDashboard.png" fluid/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/GroupMusicController.png" fluid/>
            </Carousel.Item>
            
           
        </Carousel>
        <Carousel touch data-bs-theme='dark' className=" d-sm-none">

            <Carousel.Item >
                <Image src="/images/ExpenseTrackerUI.png" fluid/>
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/ExpenseTrackerCalc.png" fluid/>
            </Carousel.Item>
        </Carousel>
        <Carousel touch data-bs-theme='dark' className=" d-sm-none">
           
            <Carousel.Item>
                <Image src="/images/QuizUI.png" fluid/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/RockPaperScissorsUI.png" fluid/>
            </Carousel.Item>
        </Carousel>

             <section>

        <Carousel touch data-bs-theme='dark' className=" d-none d-sm-inline">
           
            <Carousel.Item>
                <Image src="/images/GroupMusicDashboard.png" fluid/>
           <Carousel.Caption>
            <div className=" bg-light bg-opacity-75 rounded rounded-3">

            <h4>Group Music</h4>
            <p>Dashboard Page</p>
            </div>
            
           </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/GroupMusicController.png" fluid/>
                <Carousel.Caption>
                    <div className=" bg-light bg-opacity-75 rounded rounded-3">

            <h4 >Group Music</h4>
            <p>Music Room Page</p>
                    </div>
            
           </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/ExpenseTrackerUI.png" fluid/>
                <Carousel.Caption> 
                    <div className=" bg-dark bg-opacity-75 rounded rounded-3">

            <h4 className="text-light">Expense Tracker</h4>
            <p className="text-light">Dashboard Page</p>
                    </div>
            
           </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/ExpenseTrackerCalc.png" fluid/>
                <Carousel.Caption>
                    <div className=" bg-light bg-opacity-75 rounded rounded-3">

            <h4>Expense Tracker</h4>
            <p>Calculator Page</p>
                    </div>
            
           </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/QuizUI.png" fluid/>
                <Carousel.Caption>
                    <div className=" rounded rounded-3 bg-dark bg-opacity-75">

            <h4 className="text-white">Naruto Quiz</h4>
            <p className="text-white">Starting Page</p>
                    </div>
            
           </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/RockPaperScissorsUI.png" fluid/>
               <Carousel.Caption>
                <div className="bg-dark bg-opacity-75 mt-5 rounded rounded-3">

            <h4 className="text-white">Rock Paper Scissors</h4>
            <p className="text-white">Front Page</p>
                </div>
            
           </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
       </section>
     </section> );
}
 
export default ProjectOutputs;