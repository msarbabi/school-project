import { combineReducers } from "redux";
import { teacherReducer } from "./teacherReducer";
import { studentReducer } from "./studentReducer";
import { classesReducer } from "./classesReducer";
import { classReducer } from "./classReducer";

export const reducers = combineReducers({
    teachers: teacherReducer,
    students: studentReducer,
    classes: classesReducer,
    myClass: classReducer,
});
