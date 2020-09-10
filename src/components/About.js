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
                        {data.abouttext}
                        </p>
                    </Fade>
                </Container>
                <Container>
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

