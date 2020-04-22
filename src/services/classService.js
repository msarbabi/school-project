import http from "./httpService";
import config from "./config.json";

export const getAllClasses = () => {
    return http.get(`${config.localUrl}/classes`);
};

export const setClass = (myClass) => {
    return http.post(`${config.localUrl}/classes`, myClass);
};

export const getClass = (classNumber) => {
    return http.get(`${config.localUrl}/classes?classNumber=${classNumber}`);
};

export const updateClass = (cls, id) => {
    return http.patch(`${config.localUrl}/classes/${id}`, cls);
};
