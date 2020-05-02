import React, { useEffect, Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, CardHeader, CardTitle } from "reactstrap";

import { findStudent } from "../../redux/action/studentActions/findStudent";
import { UtilsContext } from "../../context/utilsContext";
import ClassesTable from "../Classes/ClassesTable";
import NotFoundThing from "../Common/NotFoundThing";

const MyStudent = ({ match }) => {
    const dispatch = useDispatch();

    const student = useSelector((state) => state.myStudent);
    const classes = useSelector((state) => state.classes);

    const { windowWidth } = useContext(UtilsContext);

    useEffect(() => {
        dispatch(findStudent(match.params.id));
        //eslint-disable-next-line
    }, [match.params.id]);

    return (
        <Fragment>
            {student ? (
                <Col sm={windowWidth <= 1000 ? "12" : "8"} className='cool'>
                    <Card
                        body
                        outline
                        color='success'
                        style={{
                            padding: "0 0 3%",
                        }}
                    >
                        <CardHeader
                            style={{ textAlign: "center", width: "100%" }}
                        >
                            {`${student.firstname} ${student.lastname}`}
                        </CardHeader>

                        <CardTitle
                            style={{ margin: "3% 2% 0", textAlign: "right" }}
                        >
                            <b>نام پدر</b> : <i>{student.fatherName}</i> <br />
                            <b>شماره شناسنامه</b> :{" "}
                            <i>{student.shenasnameCode}</i> <br />
                            <b>شماره همراه پدر</b> :{" "}
                            <i>{student.fatherNumber}</i> <br />
                            <b>تلفن منزل</b> : <i>{student.homeNumber}</i>{" "}
                            <br />
                            <b>تاریخ تولد</b> : <i>{student.birthday}</i> <br />
                            {student.studentInfo ? (
                                <p>
                                    <b>درباره دانش آموز</b> :{" "}
                                    <i>{student.studentInfo}</i> <br />
                                </p>
                            ) : null}
                            <hr />
                            <CardHeader
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "#e0ebeb",
                                }}
                            >
                                {`لیست کلاس های ${student.firstname} ${student.lastname}`}
                            </CardHeader>
                            {classes.length !== 0 ? (
                                <ClassesTable classes={classes} />
                            ) : (
                                <NotFoundThing
                                    message={`${student.firstname} ${student.lastname} در هیج کلاسی حضور ندارد.`}
                                    width={windowWidth}
                                />
                            )}
                        </CardTitle>
                    </Card>
                </Col>
            ) : null}
        </Fragment>
    );
};

export default MyStudent;
