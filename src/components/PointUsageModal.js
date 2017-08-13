import React from 'react';
import { Button, ControlLabel, Form, FormGroup, FormControl, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

class PointUsageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usage: 0,
    };
    this.handleUsageChange = this.handleUsageChange.bind(this);
    this.handleUsage = this.handleUsage.bind(this);
  }
  handleUsageChange(e) {
    this.setState({ usage: Math.abs(parseInt(e.target.value, 10)) });
  }
  handleUsage() {
    this.props.onUsage(this.state.usage);
  }
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
        >
          <ModalHeader>
            <h1>포인트 사용</h1>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup controlId="formControlsText">
                <ControlLabel>포인트</ControlLabel>
                <FormControl
                  type="number"
                  onChange={this.handleUsageChange}
                  value={this.state.usage}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleUsage}>사용</Button>
            <Button onClick={this.props.close}>취소</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const styles = {
  memo: {
    resize: 'none',
    height: '20rem',
  },
};

export default PointUsageModal;
