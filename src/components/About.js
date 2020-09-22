import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import data from '../mydata';
import { Jumbotron, Container, ListGroup} from 'react-bootstrap';

function About() {

    return(
        <Jumbotron fluid className="bg-light m-5 about">
                <Container>
                    <h1>
                        <Flip bottom cascade>About Me.</Flip>
                    </h1>
                </Container>
                <Container>
                    <Fade bottom>
                        <p className='header-title m-5'>
                        Full-Stack Web Developer with psychology background focusing on first-time client experience and user interaction. Earned certificate in UX/UI and Web Development from the University of Texas at Austin with advanced skills such as JavaScript, React.js, Node.js, and responsive web design. Highly team oriented and self-motivated with a passion for developing applications with user-experience focus.
                        </p>
                        <p className='header-title m-5'>
                        Each project’s aim is to incorporate agile development, allowing the user feedback to explore and expand the direction of the design. I have worked on several previous projects in groups of four using MERN stack, one notably allowing users to request help with tasks or volunteer to help with tasks, like an on-demand delivery app. 
                        </p>
                        <p className='header-title m-5'>
                        I am looking forward to working with a fast-paced, experienced, and user-focused team to build life and work experiences through the web.   
                        </p>
                    </Fade>
                </Container>
                <Container className="mt-5">
                        <ListGroup variant="flush">
                            <Fade>
                                <ListGroup.Item>
                                    MERN Stack
                                </ListGroup.Item>
                            </Fade>
                            <Fade>
                                <ListGroup.Item>
                                    JavaScript
                                </ListGroup.Item>
                            </Fade>
                            <Fade>
                                <ListGroup.Item>
                                    Back-End Integration
                                </ListGroup.Item>
                            </Fade>
                            <Fade>
                                <ListGroup.Item>
                                    HTML and CSS
                                </ListGroup.Item>
                            </Fade>
                        </ListGroup>
                </Container>

        </Jumbotron>
    );
}

export default About;

