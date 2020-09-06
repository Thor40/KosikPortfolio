import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

import img from '../assets/images/image0.jpeg'
function About() {

    return(
        <div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About Me</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            <img src={img} alt='about image'></img>
        </div>
    );
}

export default About;

