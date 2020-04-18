import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import School from "./School";
import Header from "../Components/Header/Header";
import { UtilsContext } from "../context/utilsContext";
import { useDispatch } from "react-redux";
import { allStudents } from "../redux/action/studentActions/allStudents";
import { allTeachers } from "../redux/action/teacherActions/allTeachers";
import { allClasses } from "../redux/action/classActions/allClasses";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    dispatch(allStudents());
    dispatch(allTeachers());
    dispatch(allClasses());
    const studentTitles = [
        "#",
        "نام",
        "نام خانوادگی",
        "نام پدر",
        "شماره شناسنامه",
        "کلاس",
        "معدل",
    ];
    const studentTitlesMobile = ["#", "نام", "نام خانوادگی", "معدل"];
    const teacherTitles = [
        "#",
        "نام",
        "نام خانوادگی",
        "نام پدر",
        "شماره شناسنامه",
        "کلاس",
    ];
    const steacherTitlesMobile = ["#", "نام", "نام خانوادگی"];
    const classTitles = ["#", "نام کلاس", "شماره کلاس", "نام دبیر"];
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });
    return (
        <UtilsContext.Provider
            value={{
                windowWidth: width,
                studentTitles,
                studentTitlesMobile,
                teacherTitles,
                steacherTitlesMobile,
                classTitles,
            }}
        >
            <BrowserRouter>
                <Header />
                <School />
            </BrowserRouter>
        </UtilsContext.Provider>
    );
}

export default App;
