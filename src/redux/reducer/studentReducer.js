export const studentReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_STUDENTS":
            return [...action.payload];
        case "STUDENT":
            return [...action.payload];
        case "ADD_STUDENT":
            return [...action.payload];
        case "REMOVE_STUDENT":
            return [...action.payload];
        default:
            return state;
    }
};
