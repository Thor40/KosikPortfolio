import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaGithubSquare  } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Button, Container } from 'react-bootstrap';
import data from '../mydata';

function Contact() {

    return( 
        <Container justify>
              <h1>
                      <Fade bottom cascade>Contact</Fade>
              </h1>
            <div>
              <Button variant="outline-dark" size="lg" href={`mailto:${data.contactEmail}`}>
                          Nicholas.kosik@gmail.com
              </Button>
            </div>
            <Container justify className="mt-3 p-2">
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
          </Container>  
        </Container>
    );
};

export default Contact;