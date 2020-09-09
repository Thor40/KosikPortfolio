import React from 'react';
import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

function Navigator() {
    return (
        <Navbar fixed="top" className="justify-content-end">
            <Nav className="m-auto align-items-center">
                <Nav.Item><Link
                    style={{ textDecoration: 'none' }}
                    className='link text-secondary m-3'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></Nav.Item>
                <Nav.Item><Link
                    style={{ textDecoration: 'none' }}
                    className='link text-secondary m-3'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></Nav.Item>
                <Nav.Item><Link
                    style={{ textDecoration: 'none' }}
                    className='link text-secondary m-3'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default Navigator;