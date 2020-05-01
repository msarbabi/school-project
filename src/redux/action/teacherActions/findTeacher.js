import { getTeacher } from "../../../services/teachersService";

export const findTeacher = (id) => {
    return async (dispatch) => {
        const { data, status } = await getTeacher(id);
        if (status === 200) {
            await dispatch({ type: "TEACHER", payload: data[0] });
        } else {
            console.log("error");
        }
    };
};
