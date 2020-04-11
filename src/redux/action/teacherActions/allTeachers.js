export const allTeachers = () => {
    return async (dispatch, getState) => {
        const teachers = [...getState().teachers];
        await dispatch({ type: "ALL_TEACHERS", payload: teachers });
    };
};
