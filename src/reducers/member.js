import {
    actions
} from '../actions'
import update from 'react-addons-update';

const initialState = {
    pointSave : {
        status : 'INIT',
        member : undefined
    },
    memberListload : {
        status : 'INIT',
        list : undefined
    },
    memberEdit : {
        status : 'INIT'
    },
    memberDelete : {
        status : 'INIT'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.MEMBER_POINT_SAVE:
            return update(state, {
                pointSave : {
                    status : { $set : 'WAITING'}
                }
            });
        case actions.MEMBER_POINT_SAVE_SUCCESS:
            return update(state, {
                pointSave : {
                    status : { $set : 'SUCCESS'},
                    member : { $set : action.member}
                }
            });
        case actions.MEMBER_POINT_SAVE_FAILURE:
            return update(state, {
                pointSave : {
                    status : { $set : 'FAILURE'}
                }
            });
        case actions.MEMBER_LISTLOAD :
            return update(state, {
                memberListload: {
                    status : { $set : 'WAITING'}
                }
            });
        case actions.MEMBER_LISTLOAD_SUCCESS :
            return update(state, {
                memberListload: {
                    status : { $set : 'SUCCESS'},
                    list : { $set : action.list}
                }
            });
        case actions.MEMBER_LISTLOAD_FAILURE :
            return update(state, {
                memberListload: {
                    status : { $set : 'FAILURE'}
                }
            });
        case actions.MEMBER_EDIT :
            return update(state, {
                memberEdit: {
                    status : { $set : 'WAITING'}
                }
            });
        case actions.MEMBER_EDIT_SUCCESS :
            return update(state, {
                memberEdit: {
                    status : { $set : 'SUCCESS'}
                }
            });
        case actions.MEMBER_EDIT_FAILURE :
            return update(state, {
                memberEdit: {
                    status : { $set : 'FAILURE'}
                }
            });
        case actions.MEMBER_DELETE :
            return update(state, {
                memberDelete: {
                    status : { $set : 'WAITING'}
                }
            });
        case actions.MEMBER_DELETE_SUCCESS :
            return update(state, {
                memberDelete: {
                    status : { $set : 'SUCCESS'}
                }
            });
        case actions.MEMBER_DELETE_FAILURE :
            return update(state, {
                memberDelete: {
                    status : { $set : 'FAILURE'}
                }
            });
        default:
            return state
    }
}
