export const setImage = (url) => {
    return {
        type: 'setImage',
        url,
    };
};

export const setDoubleImages = (list) => {
    return {
        type: 'setDouble',
        list,
    }
};
