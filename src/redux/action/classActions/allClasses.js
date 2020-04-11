export const allClasses = () => {
    return async (dispatch, getState) => {
        const classes = [...getState().classes];
        await dispatch({ type: "ALL_CLASSES", payload: classes });
    };
};
