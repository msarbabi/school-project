import http from "./httpService";
import config from "./config.json";

export const getAllStudents = () => {
    return http.get(`${config.localUrl}/students`);
};

export const setStudent = (student) => {
    return http.post(`${config.localUrl}/students`, student);
};

export const getStudent = (id) => {
    return http.get(`${config.localUrl}/students?id=${id}`);
};
