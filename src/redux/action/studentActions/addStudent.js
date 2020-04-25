import { setStudent } from "../../../services/studentsService";
import { getClass, updateClass } from "../../../services/classService";

export const addStudent = (student) => {
    return async (dispatch, getState) => {
        const students = [...getState().students];
        const cls = await getClass(student.classNumber);
        cls.data[0].students.push(student);
        const upd = await updateClass(cls.data[0], cls.data[0].id);
        if (upd.status === 200) {
            const { status } = await setStudent(student);
            if (status === 201) {
                students.push(student);
                await dispatch({ type: "ADD_STUDENT", payload: students });
            } else {
                console.log(`error request: ${status}`);
                await dispatch({ type: "ADD_STUDENT", payload: students });
            }
        }
    };
};
