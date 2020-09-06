import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';


function Project() {

    return( 
        <Fade bottom>
        <div className="row">
        {/* {data.projects.map((project)=>( */}
          <div className="col">
          <div className="card m-1" style={ { width: "100vw" } }>
            <img src={`/assets/images/${data.imageSrc}`} className="card-img-top" alt="..." />
            <div className="card-body">
          <h3 className="card-title">{data.title}</h3>
              <p className="card-text">{data.service}</p>
              <a href={data.url} className="btn btn-primary">GitHub</a>
            </div>
          </div>
          </div>
        {/* // ))} */}
        </div>
      </Fade>
    );
};

export default Project;