import React from 'react';
import Projects from './Projects';
import { Col, Row } from 'react-bootstrap'
import Flip from 'react-reveal/Flip';
import data from '../mydata';



function Work() {

    return( 
        <div className="bg-dark">
        <h1 className='work-header pad-top'>
        <Flip bottom cascade>Work.</Flip></h1>
        <div>
            <Row className='NoMargin' noGutters='false'>
                {data.projects.map((project)=>(
                    <Col key={project.id}>
                    <Projects 
                             title = {project.title}
                             info = {project.info}
                             imageSrc = {project.imageSrc}
                             url={project.github}
                             deploy={project.deploy}
                     ></Projects>
                     </Col>
                ))}
                </Row>
        </div>
        </div>
    );
};

export default Work;