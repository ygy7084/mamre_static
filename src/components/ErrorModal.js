import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

class ErrorModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <ModalHeader>
                    <h1>ERROR</h1>
                </ModalHeader>
                <ModalBody>
                    <p>
                        {this.props.message ? this.props.message : ''}
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.props.close}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ErrorModal;