import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import { Jumbotron, Container, ListGroup} from 'react-bootstrap';

function About() {

    return(
        <Jumbotron fluid className="bg-light m-5 about">
                <Container>
                    <h1>
                        <Fade bottom cascade>About Me.</Fade>
                    </h1>
                </Container>
                <Container>
                    <Fade bottom>
                        <p className='header-title m-5'>
                        {data.abouttext}
                        </p>
                    </Fade>
                </Container>
                <Container>
                        <ListGroup variant="flush">
                            <Fade top>
                                <ListGroup.Item>
                                    MERN Stack
                                </ListGroup.Item>
                            </Fade>
                            <Fade bottom>
                                <ListGroup.Item>
                                    JavaScript
                                </ListGroup.Item>
                            </Fade>
                            <Fade top>
                                <ListGroup.Item>
                                    Back-End Integration
                                </ListGroup.Item>
                            </Fade>
                            <Fade bottom>
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

