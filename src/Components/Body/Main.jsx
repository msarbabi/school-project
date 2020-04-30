import React, { Fragment, useContext } from "react";
import { Col, Card, CardText } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import { useSelector } from "react-redux";

const Main = () => {
    const { windowWidth } = useContext(UtilsContext);
    const teachers = useSelector((state) => state.teachers);
    const students = useSelector((state) => state.students);
    const classes = useSelector((state) => state.classes);

    return (
        <Fragment>
            <Col
                sm={windowWidth <= 1000 ? "12" : "8"}
                className='cool'
                style={{ textAlign: "right" }}
            >
                <Card body>
                    <h4>تعداد دبیران : {teachers.length}</h4>
                    <h4>تعداد دانش آموزان : {students.length}</h4>
                    <h4>مجموع کلاس ها : {classes.length}</h4>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Main;
