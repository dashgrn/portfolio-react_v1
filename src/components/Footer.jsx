import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Footer extends Component {
    render() {
        return (
            <div class="bg-dark">
                <Card className="text-center bg-dark text-white">

                    <Card.Body>

                        <Card.Text>
                            Hecho con amor por Jose Fernández - Todos los derechos Reservados.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}
