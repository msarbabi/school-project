import { getAllStudents } from "../../../services/studentsService";

export const allStudents = () => {
    return async (dispatch) => {
        const { data, status } = await getAllStudents();
        if (status === 200) {
            await dispatch({ type: "ALL_STUDENTS", payload: data });
        } else {
            console.log(`error request: ${status}`);
        }
    };
};
