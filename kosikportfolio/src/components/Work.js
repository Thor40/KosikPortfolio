import React from 'react';
import Projects from './Projects';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

function Work() {

    return( 
        <div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                    <Projects></Projects>
        </div>
        </div>
    );
};

export default Work;