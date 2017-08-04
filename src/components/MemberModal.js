import React from 'react';
import {Button, ControlLabel, Form, FormGroup, FormControl, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

class MemberModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            phone : this.props.member.phone,
            point : this.props.member.point,
            name : this.props.member.name,
            birth : this.props.member.birth,
            memo : this.props.member.memo
        };
        this.handlePointChange = this.handlePointChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBirthChange = this.handleBirthChange.bind(this);
        this.handleMemoChange = this.handleMemoChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    componentWillReceiveProps(next) {
        this.setState({
            phone : next.member.phone,
            point : next.member.point,
            name : next.member.name,
            birth : next.member.birth,
            memo : next.member.memo
        });
    }
    handlePointChange(e) {
        this.setState({point:e.target.value})
    }
    handleNameChange(e) {
        this.setState({name:e.target.value})
    }
    handleBirthChange(e) {
        this.setState({birth:new Date(e.target.value)});
    }
    handleMemoChange(e){
        this.setState({memo:e.target.value});
    }
    handleSave() {
        this.props.save(this.state);
    }
    render() {
        let member = JSON.parse(JSON.stringify(this.state));
        if(member)
            for(let property in member) {
                if(member.hasOwnProperty(property)) {
                    if (!member[property]) {
                        member[property] = '';
                    }
                    if(property==='birth' && member[property]!=='') {
                        let month = this.state.birth.getMonth() + 1;
                        if (month < 10)
                            month = '0' + month;
                        let date = this.state.birth.getDate();
                        if (date < 10)
                            date = '0' + date;
                        member[property] = this.state.birth.getFullYear() + '-' + month + '-' + date;
                    }
                }
            }
        return (
            <Modal show={this.props.show}>
                <ModalHeader>
                    <h1>{member.phone}</h1>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>포인트</ControlLabel>
                            <FormControl
                                type='number'
                                onChange={this.handlePointChange}
                                value={member.point}/>
                        </FormGroup>
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>이름</ControlLabel>
                            <FormControl
                                type='text'
                                onChange={this.handleNameChange}
                                value={member.name}/>
                        </FormGroup>
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>기념일</ControlLabel>
                            <FormControl
                                type='date'
                                onChange={this.handleBirthChange}
                                value={member.birth}/>
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>메모</ControlLabel>
                            <FormControl
                                componentClass='textarea'
                                style={styles.memo}
                                onChange={this.handleMemoChange}
                                value={member.memo}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.handleSave}>Save</Button>
                    <Button onClick={this.props.delete}>Delete</Button>
                    <Button onClick={this.props.close}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const styles = {
    memo : {
        resize :'none',
        height : '20rem'
    }
};

export default MemberModal;