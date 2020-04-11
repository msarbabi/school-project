export const allStudent = () => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        await dispatch({ type: "ALL_STUDENTS", payload: students });
    };
};
