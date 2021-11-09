import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap/FormGroup';

export default class Contact extends Component {
    render() {
        return (
            <div class="bg-dark">
                <div className="d-flex d-flex justify-content-center mb-3 pb-3">
                    <div class="row">
                        <Container>
                            <div className="mx-3">
                                <h2 class="text-white pt-4">Contacto</h2>
                                <h6 class="text-white">Si estás interesado, no dudes en contactarme</h6>
                            </div>
                        </Container>

                        <Container>
                            <Form>
                                <div class="text-white">
                                    <Form.Group className="my-4 mx-4" controlId="Form.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre Completo" />
                                    </Form.Group>
                                    <Form.Group className="my-4 mx-4" controlId="Form.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Correo electrónico" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mx-4" controlId="Form.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control as="textarea" placeholder="Mensaje" rows={3} />
                                    </Form.Group>
                                </div>
                            </Form>
                        </Container>
                    </div>
                </div >
            </div>
        )
    }
}
