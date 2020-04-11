export const addTeacher = (teacher) => {
    return async (dispatch, getState) => {
        const teachers = [...getState().teachers];
        teachers.push(teacher);
        await dispatch({ type: "ADD_TEACHER", payload: teachers });
    };
};
