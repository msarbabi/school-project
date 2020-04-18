import { setClass } from "../../../services/classService";

export const addClass = (myClass) => {
    return async (dispatch, getState) => {
        const classes = [...getState().classes];
        const { status } = await setClass(myClass);
        if (status === 201) {
            classes.push(myClass);
            await dispatch({ type: "ADD_CLASS", payload: classes });
        } else {
            await dispatch({ type: "ADD_CLASS", payload: classes });
        }
    };
};
