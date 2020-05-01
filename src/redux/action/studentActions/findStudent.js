import { getStudent } from "../../../services/studentsService";

export const findStudent = (id) => {
    return async (dispatch) => {
        const { data, status } = await getStudent(id);
        if (status === 200) {
            await dispatch({ type: "STUDENT", payload: data[0] });
        } else {
            console.log("error");
        }
    };
};
