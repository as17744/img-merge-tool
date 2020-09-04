import { combineReducers } from 'redux';

const singleReducer = (state = {
    img: '',
}, action) => {
    if (action.type === 'setImage') {
        return {
            ...state,
            img: action.url,
        };
    }
    return state;
};

const doubleReducer = (state = {
    list: [],
}, action) => {
    if (action.type === 'setDouble') {
        return {
            list: action.list,
        };
    }
    return state;
}

export default combineReducers({
    singleReducer,
    doubleReducer,
});
