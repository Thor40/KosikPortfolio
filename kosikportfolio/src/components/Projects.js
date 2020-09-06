import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

function Project() {

    return( 
        <Fade bottom>
        <div className="row">
        {data.projects.map((project)=>(
          <div className="col">
          <div className="card m-1" style={ { width: "30rem" } }>
            <img src={`/assets/images/${project.imageSrc}`} className="card-img-top" alt="..." />
            <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.service}</p>
              <a href={project.url} className="btn btn-primary">GitHub</a>
            </div>
          </div>
          </div>
        ))}
        </div>
      </Fade>
    );
};

export default Project;