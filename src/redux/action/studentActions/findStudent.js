export const findStudent = (name) => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        const student = students.find(name);
        await dispatch({ type: "STUDENT", payload: student });
    };
};
