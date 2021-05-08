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
                    <Link smooth to="#home"   className="navbar__element" >Home</Link>
                    <Link smooth to="#sobremi"className="navbar__element" >Sobre mí</Link>
                    <Link smooth to="#tecno"  className="navbar__element" >Tecnologías</Link>
                   <Link smooth to="#proyect" className="navbar__element" >Proyectos</Link>
                    <Link smooth to="#audiovisual" className="navbar__element" >Audiovisual</Link>
                   <Link smooth to="#contacto" className="navbar__element" >Contacto</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Router>
    )
}
