export const teacherReducer = (state = {}, action) => {
    switch (action.type) {
        case "TEACHER":
            return { ...action.payload };
        default:
            return state;
    }
};
