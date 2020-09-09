import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import { FaGithubSquare  } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

function Contact() {

    return( 
        <div>
            <h1 className="mt-5 p-2">
                    <Fade bottom cascade> Contact</Fade>
            </h1>
            <div className="mt-5 p-2">
              <a
                href="https://github.com/Thor40"
                className="m-3"
              >
                <FaGithubSquare size={80} style={{ fill: 'black' }}/>
              </a>
              <a href="https://www.linkedin.com/in/nicholas-kosik-17405a1a3/" className="m-3">
                <FaLinkedin size={80} style={{ fill: 'black' }} />
              </a>
              <a
                href="https://www.instagram.com/thorkosik/"
                className="m-3"
              >
                <GrInstagram size={80} style={{ fill: 'black' }} />
              </a>
          </div>  
        </div>
    );
};

export default Contact;