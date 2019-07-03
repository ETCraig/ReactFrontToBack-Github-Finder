import { SET_ALERT, REMOVE_ALERT } from '../Types';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                alert: action.payload
            };
        case REMOVE_ALERT:
            return {
                alter: null
            };
        default:
            return state
    }
}