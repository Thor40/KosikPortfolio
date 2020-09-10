import React from 'react';
import Fade from 'react-reveal/Fade';
import { Card, Image, Button, Container } from 'react-bootstrap'

function Project(props) {

    return( 
        <Fade>
        <Container>
            <Card className='project m-5 bg-dark' style={ { border: "none" } } key={props.id}>
                <a href={props.url}>
                    <Image src={process.env.PUBLIC_URL + `/assets/images/${props.imageSrc}`} alt={props.title} className="projectImg"></Image>
                </a>
                <Card.Title className="m-3 text-white">{props.title}</Card.Title>
                <Card.Body className="text-white">
                    <p>{props.info}</p>
                    <Button href={props.github} variant="outline-light" size="lg">GitHub</Button>
                </Card.Body>
            </Card>
        </Container>
            </Fade>
    );
};

export default Project;