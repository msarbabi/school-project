import { setTeacher } from "../../../services/teachersService";

export const addTeacher = (teacher) => {
    return async (dispatch, getState) => {
        const teachers = [...getState().teachers];
        const { status } = await setTeacher(teacher);
        if (status === 201) {
            teachers.push(teacher);
            await dispatch({ type: "ADD_TEACHER", payload: teachers });
        } else {
            console.log(`error request: ${status}`);
        }
    };
};
