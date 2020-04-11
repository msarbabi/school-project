export const removeTeacher = (id) => {
    return async (dispatch, getState) => {
        const teachers = [...getState().teachers];
        const filteredTeacher = teachers.filter(id);
        await dispatch({ type: "REMOVE_TEACHER", payload: filteredTeacher });
    };
};
