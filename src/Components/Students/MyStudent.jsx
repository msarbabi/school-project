import React, { useEffect, Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, CardHeader, CardTitle } from "reactstrap";

import { findStudent } from "../../redux/action/studentActions/findStudent";
import { UtilsContext } from "../../context/utilsContext";

const MyStudent = ({ match }) => {
    const dispatch = useDispatch();

    const student = useSelector((state) => state.myStudent);

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
                            padding: "0",
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
                        </CardTitle>
                    </Card>
                </Col>
            ) : null}
        </Fragment>
    );
};

export default MyStudent;
