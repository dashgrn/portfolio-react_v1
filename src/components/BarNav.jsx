import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'


export default class BarNav extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Hola</Nav.Link>
                                <Nav.Link href="#features">Proyectos</Nav.Link>
                                <Nav.Link href="#pricing">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="justify-content-end">
                                <Button variant="outline-warning">Descargar C.V</Button>
                            </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>
        )
    }
}
