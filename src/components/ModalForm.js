import React, { Component } from 'react'

import { Modal, Button , Form  } from 'react-bootstrap'

export class ModalForm extends Component {
    render() {
        return (
            <Modal show={this.props.handleModal} onHide={() => this.props.handleModalClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={this.props.updateForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter"  value={this.props.strDrink} onChange={this.props.strDrinkHandler} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" value={this.props.strDrinkThumb} placeholder="Enter" onChange={this.props.strDrinkThumbHandler} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>



                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleModalClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalForm
