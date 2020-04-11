import { combineReducers } from "redux";
import { teacherReducer } from "./teacherReducer";
import { studentReducer } from "./studentReducer";
import { classesReducer } from "./classesReducer";

export const reducers = combineReducers({
    teachers: teacherReducer,
    students: studentReducer,
    classes: classesReducer,
});
