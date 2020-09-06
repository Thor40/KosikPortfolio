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
                {data.projects.map((project)=>(
                    <Projects key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Projects>
                ))}
        </div>
        </div>
    );
};

export default Work;