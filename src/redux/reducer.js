import { combineReducers } from 'redux';
import {INCREASE, DECREASE, RESET} from './action'
// 原始默认state
const defaultState = {
    count: 0,
    factor: 1
};
function counter(state = defaultState, action) {
    switch (action.type) {
        case INCREASE:
            return { ...state, count: state.count + state.factor };
        case DECREASE:
            return { ...state, count: state.count - state.factor };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}

 const rootReducer= combineReducers({
    counter
});
export default rootReducer;
