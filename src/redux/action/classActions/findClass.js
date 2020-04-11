export const findClass = (name) => {
    return async (dispatch, getState) => {
        const classes = [...getState().classes];
        const myClass = classes.find(name);
        await dispatch({ type: "CLASS", paylaod: myClass });
    };
};
