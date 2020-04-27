export const classesReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_CLASSES":
            return [...action.payload];
        case "ADD_CLASS":
            return [...action.payload];
        case "REMOVE_CLASS":
            return [...action.payload];
        default:
            return state;
    }
};
