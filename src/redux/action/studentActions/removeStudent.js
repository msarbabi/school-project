export const removeStudent = (id) => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        const filteredStudents = students.filter(id);
        await dispatch({ type: "REMOVE_STUDENT", payload: filteredStudents });
    };
};
