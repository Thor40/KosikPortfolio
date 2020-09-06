import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import { Container, Image, Row, Col } from 'react-bootstrap';
import img from '../assets/images/image0.jpeg'

function About() {

    return(
        <div fluid className='about p-0 row'>
            <div fluid className="w-100 p-0 text-center">
                <Image src={img} alt='image of me'className="justify-content-end w-100" rounded/>
                <div className="title">
                        <h1 className="float-left justify-content-start">
                            <Fade bottom cascade>About Me</Fade>
                        </h1>
                        <Fade bottom>
                            <p>{data.abouttext}</p>
                        </Fade>
                </div>
            </div>
        </div>
    );
}

export default About;

