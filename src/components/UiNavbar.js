import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,

  } from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';

export const UiNavbar = () => {
    return (
        <Router>
        <Navbar className="navbar__main"  fixed="top" expand="lg">
            <Navbar.Brand className="navbar__title" > </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navbar__element" ><Link smooth to="#home">Home</Link></Nav.Link>
                    <Nav.Link className="navbar__element" ><Link smooth to="#sobremi">Sobre mí</Link></Nav.Link>
                    <Nav.Link className="navbar__element" ><Link smooth to="#tecno">Tecnologías</Link></Nav.Link>
                   <Nav.Link className="navbar__element" ><Link smooth to="#proyect">Proyectos</Link></Nav.Link>
                    <Nav.Link className="navbar__element" ><Link smooth to="#audiovisual">Audiovisual</Link></Nav.Link>
                   <Nav.Link className="navbar__element" ><Link smooth to="#contacto">Contacto</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Router>
    )
}
