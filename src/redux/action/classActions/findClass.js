import { getClassById } from "../../../services/classService";

export const findClass = (id) => {
    return async (dispatch) => {
        const { data, status } = await getClassById(id);
        if (status === 200) {
            await dispatch({ type: "GET_CLASS", payload: data[0] });
        } else {
            console.log("error");
        }
    };
};
