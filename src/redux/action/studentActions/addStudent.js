export const addStudent = (student) => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        students.push(student);
        await dispatch({ type: "ADD_STUDENT", payload: students });
    };
};
