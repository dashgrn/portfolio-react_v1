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
                                <Nav.Link href="#projects">Proyectos</Nav.Link>
                                <Nav.Link href="#contact">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="justify-content-end">
                                <a href="https://drive.google.com/file/d/1degdBn04owHyhU7xoSRaqRkL84EXVDR0/view?usp=sharing"> <Button variant="outline-warning">Descargar C.V</Button></a>
                            </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>
        )
    }
}
