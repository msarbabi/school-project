import { createContext } from "react";

export const UtilsContext = createContext({
    windowWidth: Number,
    studentTitles: [],
    studentTitlesMobile: [],
    teacherTitles: [],
    classTitles: [],
});
