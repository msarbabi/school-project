import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, CardTitle, CardBody, CardHeader } from "reactstrap";

import { UtilsContext } from "../../context/utilsContext";
import { findClass } from "../../redux/action/classActions/findClass";
import StudentsTable from "../Students/StudentsTable";
import NotFoundThing from "../Common/NotFoundThing";

const MyClass = ({ match }) => {
    const dispatch = useDispatch();

    const cls = useSelector((state) => state.myClass);
    const { windowWidth } = useContext(UtilsContext);

    useEffect(() => {
        dispatch(findClass(match.params.id));
        //eslint-disable-next-line
    }, [match.params.id]);

    return (
        <React.Fragment>
            {cls.students ? (
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
                            کلاس {cls.classLesson}
                        </CardHeader>

                        <CardTitle
                            style={{ margin: "3% 2% 0", textAlign: "right" }}
                        >
                            نام دبیر: {cls.teacherName} <br />
                            جمعیت: {cls.students.length} <br />
                            شماره کلاس: {cls.classNumber} <br />
                            {cls.classInfo ? (
                                <p>توضیحات : {cls.classInfo}</p>
                            ) : null}
                        </CardTitle>
                        <CardBody>
                            {cls.students.length === 0 ? (
                                <NotFoundThing
                                    width={windowWidth}
                                    message='در این کلاس هیچ دانش آموزی وجود ندارد.'
                                />
                            ) : (
                                <StudentsTable students={cls.students} />
                            )}
                        </CardBody>
                    </Card>
                </Col>
            ) : null}
        </React.Fragment>
    );
};

export default MyClass;
