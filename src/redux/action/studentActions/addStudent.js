import { setStudent } from "../../../services/studentsService";

export const addStudent = (student) => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        const { status } = await setStudent(student);
        if (status === 201) {
            students.push(student);
            await dispatch({ type: "ADD_STUDENT", payload: students });
        } else {
            console.log(`error request: ${status}`);
            await dispatch({ type: "ADD_STUDENT", payload: students });
        }
    };
};
