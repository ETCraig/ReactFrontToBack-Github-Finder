import React, { useReducer } from 'react';
import alertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../Types';

const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //Changes Alert 
    const handleSearchAlert = (msg, type) => {
        dispatch({
            TYPE: SET_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }

    return <alertContext.Provider
        value={{
            alert: state,
            handleSearchAlert,
        }}
    >
        {props.children}
    </alertContext.Provider>
}

export default AlertState;