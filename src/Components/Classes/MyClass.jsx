import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UtilsContext } from "../../context/utilsContext";
import { findClass } from "../../redux/action/classActions/findClass";

import StudentsTable from "../Students/StudentsTable";
import { Col, Card, CardTitle, CardBody, CardHeader } from "reactstrap";
import NotFoundThing from "../Common/NotFoundThing";

const MyClass = ({ match }) => {
    const cls = useSelector((state) => state.myClass);
    const dispatch = useDispatch();

    const { windowWidth } = useContext(UtilsContext);
    // const [classData, setClassData] = useState();

    useEffect(() => {
        dispatch(findClass(match.params.id));
        // console.log(cls);
        // setClassData(cls);
    }, [match.params.id]);

    // console.log(cls);
    // console.log(classData);

    return (
        <Col sm={windowWidth <= 1000 ? "12" : "8"} className='cool'>
            <Card
                body
                outline
                color='success'
                style={{
                    // textAlign: "center",
                    padding: "0 0 3% 0",
                    margin: "0",
                }}
            >
                <CardHeader style={{ textAlign: "center", width: "100%" }}>
                    کلاس {cls ? cls.classLesson : null}
                </CardHeader>
                {/* <CardTitle style={{ marginTop: "3%", direction: "rtl " }}>
                    جمعیت: {cls ? cls.students.length : null}
                </CardTitle>
                <CardBody>
                    {cls ? (
                        cls.students.length === 0 ? (
                            <NotFoundThing
                                width={windowWidth}
                                message='در این کلاس هیچ دانش آموزی وجود ندارد.'
                            />
                        ) : (
                            <StudentsTable students={cls.students} />
                        )
                    ) : null}
                </CardBody> */}
            </Card>
        </Col>
    );
};

export default MyClass;
