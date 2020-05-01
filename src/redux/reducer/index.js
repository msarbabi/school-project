import { combineReducers } from "redux";
import { teachersReducer } from "./teachersReducer";
import { teacherReducer } from "./teacherReducer";
import { studentsReducer } from "./studentsReducer";
import { studentReducer } from "./studentReducer";
import { classesReducer } from "./classesReducer";
import { classReducer } from "./classReducer";

export const reducers = combineReducers({
    teachers: teachersReducer,
    myTeacher: teacherReducer,
    students: studentsReducer,
    myStudent: studentReducer,
    classes: classesReducer,
    myClass: classReducer,
});
