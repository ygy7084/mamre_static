import {
    MEMBER_POINT_SAVE,
    MEMBER_POINT_SAVE_SUCCESS,
    MEMBER_POINT_SAVE_FAILURE,
    MEMBER_LISTLOAD,
    MEMBER_LISTLOAD_SUCCESS,
    MEMBER_LISTLOAD_FAILURE,
    MEMBER_EDIT,
    MEMBER_EDIT_SUCCESS,
    MEMBER_EDIT_FAILURE,
    MEMBER_DELETE,
    MEMBER_DELETE_SUCCESS,
    MEMBER_DELETE_FAILURE
} from './actions';

const API = 'http://localhost:4000';

const pointSaveRequest = (inputNumber) => {
    return (dispatch) => {
        dispatch(pointSave());
        return fetch(API+'/api/member/save', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({phone:inputNumber})
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    return res.json().then(error => {
                        throw error;
                    })
            })
            .then(member => {
                if(member) {
                    return dispatch(pointSaveSuccess(member));
                } else {
                    return dispatch(pointSaveFailure({
                        error:null,
                        message:'알 수 없는 오류'
                    }));
                }
            })
            .catch((error) => {
                return dispatch(pointSaveFailure(error));
            });
    }
};
const pointSave = () => {
    return {
        type : MEMBER_POINT_SAVE
    }
};
const pointSaveSuccess = (member) => {
    return {
        type : MEMBER_POINT_SAVE_SUCCESS,
        member
    }
};
const pointSaveFailure = (error) => {
    return {
        type : MEMBER_POINT_SAVE_FAILURE,
        error
    }
};
const memberListloadRequest = () => {
    return (dispatch) => {
        dispatch(memberListload());
        return fetch(API+'/api/member/all')
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    return res.json().then(error => {
                        throw error;
                    })
            })
            .then(data => {
                if(data) {
                    for(let obj of data.list)
                        obj.birth = obj.birth ? new Date(obj.birth) : undefined;

                    return dispatch(memberListloadSuccess(data.list));
                } else {
                    return dispatch(memberListloadFailure({
                        error:null,
                        message:'알 수 없는 오류'
                    }));
                }
            })
            .catch((error) => {
                return dispatch(memberListloadFailure(error));
            });
    }
};
const memberListload = () => {
    return {
        type : MEMBER_LISTLOAD
    }
};
const memberListloadSuccess = (list) => {
    return {
        type : MEMBER_LISTLOAD_SUCCESS,
        list
    }
};
const memberListloadFailure = (error) => {
    return {
        type : MEMBER_LISTLOAD_FAILURE,
        error
    }
};
const memberEditRequest = (member) => {
    return (dispatch) => {
        dispatch(memberEdit());

        member.birth ? member.birth = member.birth.getTime() : null;

        return fetch(API+'/api/member/edit', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(member)
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    return res.json().then(error => {
                        throw error;
                    })
            })
            .then(success => {
                if(success) {
                    return dispatch(memberEditSuccess());
                } else {
                    return dispatch(memberEditFailure({
                        error:null,
                        message:'알 수 없는 오류'
                    }));
                }
            })
            .catch((error) => {
                return dispatch(memberEditFailure(error));
            });
    }
};
const memberEdit = () => {
    return {
        type : MEMBER_EDIT
    }
};
const memberEditSuccess = () => {
    return {
        type : MEMBER_EDIT_SUCCESS,
    }
};
const memberEditFailure = (error) => {
    return {
        type : MEMBER_EDIT_FAILURE,
        error
    }
};
const memberDeleteRequest = (phone) => {
    return (dispatch) => {
        dispatch(memberDelete());
        return fetch(API+'/api/member/delete', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({phone:phone})
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    return res.json().then(error => {
                        throw error;
                    })
            })
            .then(success => {
                if(success) {
                    return dispatch(memberDeleteSuccess());
                } else {
                    return dispatch(memberDeleteFailure({
                        error:null,
                        message:'알 수 없는 오류'
                    }));
                }
            })
            .catch((error) => {
                return dispatch(memberDeleteFailure(error));
            });
    }
};
const memberDelete = () => {
    return {
        type : MEMBER_DELETE
    }
};
const memberDeleteSuccess = () => {
    return {
        type : MEMBER_DELETE_SUCCESS,
    }
};
const memberDeleteFailure = (error) => {
    return {
        type : MEMBER_DELETE_FAILURE,
        error
    }
};

export {
    pointSaveRequest,
    memberListloadRequest,
    memberEditRequest,
    memberDeleteRequest
}