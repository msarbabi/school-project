import http from "./httpService";
import config from "./config.json";

export const getAllTeachers = () => {
    return http.get(`${config.localUrl}/teachers`);
};

export const setTeacher = (teacher) => {
    return http.post(`${config.localUrl}/teachers`, teacher);
};
