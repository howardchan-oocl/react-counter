import { combineReducers } from 'redux';
import { INCREASE, DECREASE, UPDATE_COUNTER_SIZE, RESET } from './actionTypes';

const sum = (state = 0, action) => {
    if (action.type == INCREASE) {
        return state + 1;
    }
    if (action.type == DECREASE) {
        return state - 1;
    }
    if (action.type == RESET) {
        return 0;
    }
    return state;
}

const size = (state = 0, action) => {
    if (action.type == UPDATE_COUNTER_SIZE) {
        return action.payload;
    }
    return state;
}

export default combineReducers(
    {
        sum,
        size
    }
)