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
                                    <Card.Img variant="top" src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636436585/thumb_bm_guh2oz.png" />
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
                                    <Card.Img variant="top" src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636436435/Screen_Shot_2021-11-09_at_12.39.57_AM_exeqdk.png" />
                                    <Card.Body>
                                        <Card.Title>EzPay</Card.Title>
                                        <Card.Text>
                                            Landing
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://res.cloudinary.com/diqhctpcx/image/upload/v1636436763/fresh-prince-1-1-3-1_ypudgv.png" />
                                    <Card.Body>
                                        <Card.Title>Fresh Prince</Card.Title>
                                        <Card.Text>
                                            Clothes Retail App
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>

                </CardGroup>
                <Button className="d-grid col-2 mx-auto m-4 btn-light mb" variant="warning">See more projects <i class="fas fa-arrow-right"></i></Button>{' '}
            </div>
        )
    }
}