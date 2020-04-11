export const removeClass = (id) => {
    return async (dispatch, getState) => {
        const classes = [...getState().classes];
        const filteredClasses = classes.filter(id);
        await dispatch({ type: "REMOVE_CLASS", payload: filteredClasses });
    };
};
