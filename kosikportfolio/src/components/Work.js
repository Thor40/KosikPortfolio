import React from 'react';
import Projects from './Projects';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

function Work() {

    return( 
        <div className="bg-dark">
        <h1 className='heading text-white'>
        <Fade bottom cascade className="mt-5">Work.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Projects key={project.id}
                             title = {project.title}
                             info = {project.info}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Projects>
                ))}
        </div>
        </div>
    );
};

export default Work;