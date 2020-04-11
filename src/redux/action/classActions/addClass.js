export const addClass = (myClass) => {
    return async (dispatch, getState) => {
        const classes = [...getState().classes];
        classes.push(myClass);
        await dispatch({ type: "ADD_CLASS", payload: classes });
    };
};
