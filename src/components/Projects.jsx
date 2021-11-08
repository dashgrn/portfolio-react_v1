import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Projects extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Container>
                        <Row className="justify-content-md-center py-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Block Master</Card.Title>
                                        <Card.Text>
                                            A Netflix like App
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Block Master</Card.Title>
                                        <Card.Text>
                                            A Netflix like App
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Block Master</Card.Title>
                                        <Card.Text>
                                            A Netflix like App
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>

                </CardGroup>
                <Button className="d-grid col-2 mx-auto btn-light" variant="warning">See more projects <i class="fas fa-arrow-right"></i></Button>{' '}
            </div>
        )
    }
}