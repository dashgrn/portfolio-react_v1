import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/ServicesSyles.css'

export default class Services extends Component {
    render() {
        return (
            <div id="mainCont" class="pb-3 pt-3">
                <h2 class="py-3 px-3 m-4">Servicios</h2>
                <Container>
                    <Row>
                        <Col>
                            <h4 >
                                Diseño
                            </h4>
                            <div class="subLine">
                                <h5>
                                    Experiencia de usuario
                                </h5>
                                <h5>
                                    Interfaz de usuario
                                </h5>
                                <h5>
                                    Aplicaciones Web
                                </h5>
                                <h5>
                                    Pruebas de concepto
                                </h5>
                            </div>
                        </Col>
                        <Col>
                            <h4>
                                Desarrollo
                            </h4>
                            <div class="subLine">


                                <h5>
                                    Aplicaciones Web
                                </h5>
                                <h5>
                                    Sitios Web
                                </h5>
                                <h5>
                                    Aplicaciones progresivas
                                </h5>
                            </div>
                        </Col>
                        <Col>
                            <h4>
                                Marca
                            </h4>
                            <div class="subLine">
                                <h5>
                                    Identidad de marca
                                </h5>
                                <h5>
                                    Estrategia de marca
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}