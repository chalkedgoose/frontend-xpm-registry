import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default () => (
    <React.Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">XPM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contributing">Contributing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)