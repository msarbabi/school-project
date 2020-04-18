import { getAllClasses } from "../../../services/classService";

export const allClasses = () => {
    return async (dispatch, getState) => {
        const { data, status } = await getAllClasses();
        if (status === 200) {
            await dispatch({ type: "ALL_CLASSES", payload: data });
        } else {
            console.log(`error request: ${status}`);
        }
    };
};
