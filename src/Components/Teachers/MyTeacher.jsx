import React, { useEffect } from "react";
import { getTeacher } from "../../services/teachersService";

const MyTeacher = () => {
    const id = window.location.pathname.split("/")[2];
    useEffect(() => {
        const getData = async () => {
            const { data } = await getTeacher(id);
            console.log(data[0]);
        };
        getData();
    });
    return <h1>معلم</h1>;
};

export default MyTeacher;
