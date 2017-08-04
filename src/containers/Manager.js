import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    member
} from '../actions'

import {
    MemberList,
    MemberWrapper,
    MemberModal
} from '../components';

class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList : [],
            MemberModal_show : false,
            MemberModal_member : '',
            ErrorMessage : '',
            ErrorModal_show : false
        };
        this.errorHandle = this.errorHandle.bind(this);
        this.listLoad = this.listLoad.bind(this);
        this.memberClick = this.memberClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentWillMount() {
       this.listLoad();
    }
    errorHandle(data) {
        const error = data.error || data;
        if(error.message && error.message!==''){
            let message = error.message;
            console.log(error.message);
            this.setState({
                ErrorMessage:message,
                ErrorModal_show:true
            });
            throw error.error;
        }
        else {
            this.setState({
                ErrorModal_show:true
            });
            console.log(error);
            throw error;
        }
    }
    listLoad() {
        return this.props.memberListloadRequest()
            .then((data) => {
                if(this.props.memberListload.status==='SUCCESS'){
                    this.setState({
                        memberList : this.props.memberListload.list
                    });
                }else if(this.props.memberListload.status==='FAILURE') {
                    throw data;
                }
            })
            .catch((data) => {
                this.errorHandle(data);
            });
    }
    memberClick(member){
        this.setState({
            MemberModal_show:true,
            MemberModal_member:member
        })
    }
    handleEdit(member) {
        return this.props.memberEditRequest(member)
            .then((data) => {
                if(this.props.memberEdit.status==='SUCCESS'){
                    this.setState({
                        MemberModal_show:false
                    });
                    this.listLoad();
                }else if(this.props.memberEdit.status==='FAILURE') {
                    throw data;
                }
            })
            .catch((data) => {
                this.errorHandle(data);
            });
    }
    handleDelete() {
        return this.props.memberDeleteRequest(this.state.MemberModal_member.phone)
            .then((data) => {
                if(this.props.memberDelete.status==='SUCCESS'){
                    this.listLoad();
                    this.setState({
                        MemberModal_show:false
                    })
                }else if(this.props.memberDelete.status==='FAILURE') {
                    throw data;
                }
            })
            .catch((data) => {
                this.errorHandle(data);
            });
    }
    render() {
        return (
            <MemberWrapper>
                <MemberList
                    list={this.state.memberList}
                    memberClick={this.memberClick}
                />
                <MemberModal
                    show={this.state.MemberModal_show}
                    member={this.state.MemberModal_member}
                    save={this.handleEdit}
                    delete={this.handleDelete}
                    close={()=>{this.setState({MemberModal_show:false})}}
                />
            </MemberWrapper>
        )
    }
}

const mapStateToProps = state => ({
    memberListload : {
        status : state.member.memberListload.status,
        list : state.member.memberListload.list
    },
    memberEdit : {
        status : state.member.memberEdit.status,
    },
    memberDelete : {
        status : state.member.memberDelete.status,
    }
});
const mapDispatchToProps = dispatch => bindActionCreators({
    memberListloadRequest : member.memberListloadRequest,
    memberEditRequest : member.memberEditRequest,
    memberDeleteRequest : member.memberDeleteRequest
}, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Manager)