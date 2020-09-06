import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import img from '../assets/images/image0.jpeg'

function About() {

    return(
        <Jumbotron fluid className="bg-light m-5">
                <Container>
                    <h1>
                        <Fade bottom cascade>About Me</Fade>
                    </h1>
                </Container>
                <Fade bottom>
                    <p className='header-title m-5'>
                    {data.abouttext}
                    </p>
                </Fade>
            </Jumbotron>
    );
}

export default About;

