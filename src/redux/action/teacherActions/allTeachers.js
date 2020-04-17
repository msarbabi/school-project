import { getAllTeachers } from "../../../services/teachersService";

export const allTeachers = () => {
    return async (dispatch) => {
        const { data, status } = await getAllTeachers();
        if (status === 200) {
            await dispatch({ type: "ALL_TEACHERS", payload: data });
        } else {
            console.log(`error request: ${status}`);
        }
    };
};
