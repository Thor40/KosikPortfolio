import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import { Container, Button } from 'react-bootstrap';

function Header() {

    return (
            <Container fluid className="App-header">
                <Container>
                    <h1>
                        <Fade bottom cascade>{data.name}</Fade>
                    </h1>
                </Container>
                <Fade bottom>
                    <p className='header-title m-5'>
                        {data.headerTagline[0]}
                            <br></br>
                        {data.headerTagline[1]}
                            <br></br>
                        {data.headerTagline[2]}
                            <br></br>
                    
                    </p>
                    <Button variant="outline-success dark" size="lg" className="mt-5" block href={`mailto:${data.contactEmail}`}>
                        Contact
                    </Button>
                </Fade>
            </Container>
    );
};

export default Header;