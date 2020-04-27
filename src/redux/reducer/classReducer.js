export const classReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_CLASS":
            return { ...action.payload };
        default:
            return state;
    }
};
