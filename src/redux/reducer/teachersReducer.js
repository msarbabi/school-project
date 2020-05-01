export const teachersReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_TEACHERS":
            return [...action.payload];
        case "ADD_TEACHER":
            return [...action.payload];
        case "REMOVE_TEACHER":
            return [...action.payload];
        default:
            return state;
    }
};
