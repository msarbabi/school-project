import React, { useEffect } from "react";
import { getStudent } from "../../services/studentsService";

const MyStudent = () => {
    const id = window.location.pathname.split("/")[2];

    useEffect(() => {
        const getData = async () => {
            const { data } = await getStudent(id);
            console.log(data);
        };
        getData();
    });

    return <h1>دانش آموز</h1>;
};

export default MyStudent;
