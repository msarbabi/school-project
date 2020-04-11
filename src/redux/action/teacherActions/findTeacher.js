export const findTeacher = (name) => {
    return async (dispatch, getState) => {
        const teachers = [...getState().teachers];
        const teacher = teachers.find(name);
        await dispatch({ type: "TEACHER", payload: teacher });
    };
};
