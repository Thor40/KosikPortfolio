import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';
import Flip from 'react-reveal/Flip';
import { Container, Button } from 'react-bootstrap';

function Header() {

    return (
            <Container fluid className="App-header">
                <Container>
                    <h1>
                        <Flip bottom cascade>{data.name}</Flip>
                    </h1>
                </Container>
                <Fade>
                    <p className='header-title m-5'>
                        {data.headerTagline[0]}
                            <br></br>
                        {data.headerTagline[1]}
                            <br></br>
                        {data.headerTagline[2]}
                            <br></br>
                    
                    </p>
                    <Button variant="outline-light" size="lg" className="mt-5" block href={`mailto:${data.contactEmail}`}>
                        Contact
                    </Button>
                </Fade>
            </Container>
    );
};

export default Header;