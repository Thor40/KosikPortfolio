import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';


function Navigator() {
    return (
        <Navbar fixed="bottom">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigator;