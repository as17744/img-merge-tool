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

export default singleReducer;
