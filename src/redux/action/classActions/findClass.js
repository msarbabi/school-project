// export const findClass = (classId) => {
//     return async (dispatch, getState) => {
//         const classes = [...getState().classes];
//         const myClass = classes.find(({ id }) => (id = classId));
//         console.log(myClass);
//         await dispatch({ type: "GET_CLASS", payload: myClass });
//     };
// };

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
