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

import {
    pointSaveRequest,
    memberListloadRequest,
    memberEditRequest,
    memberDeleteRequest
} from "./member"

const actions = {
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
};

const member = {
    pointSaveRequest,
    memberListloadRequest,
    memberEditRequest,
    memberDeleteRequest
};

export {
    actions,
    member
}