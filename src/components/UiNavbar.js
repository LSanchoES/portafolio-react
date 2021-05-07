import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
export const UiNavbar = () => {
    return (
        <Navbar className="navbar__main"  fixed="top" expand="lg">
            <Navbar.Brand className="navbar__title" > </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navbar__element" href="#">Home</Nav.Link>
                    <Nav.Link className="navbar__element" href="#">Sobre mí</Nav.Link>
                    <Nav.Link className="navbar__element" href="#">Tecnologías</Nav.Link>
                    <Nav.Link className="navbar__element" href="#">Proyectos</Nav.Link>
                    <Nav.Link className="navbar__element" href="#">Música</Nav.Link>
                    <Nav.Link className="navbar__element" href="#">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
