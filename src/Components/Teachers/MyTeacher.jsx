import React, { useEffect, useContext, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, CardHeader, CardTitle } from "reactstrap";

import { findTeacher } from "../../redux/action/teacherActions/findTeacher";
import { UtilsContext } from "../../context/utilsContext";

const MyTeacher = ({ match }) => {
    const dispatch = useDispatch();

    const { windowWidth } = useContext(UtilsContext);

    const teacher = useSelector((state) => state.myTeacher);

    useEffect(() => {
        dispatch(findTeacher(match.params.id));
        //eslint-disable-next-line
    }, [match.params.id]);

    return (
        <Fragment>
            {teacher ? (
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
                            {`${teacher.firstname} ${teacher.lastname}`}
                        </CardHeader>

                        <CardTitle
                            style={{ margin: "3% 2% 0", textAlign: "right" }}
                        >
                            <b>نام پدر</b> : <i>{teacher.fatherName}</i> <br />
                            <b>شماره شناسنامه</b> :{" "}
                            <i>{teacher.shenasnameCode}</i> <br />
                            <b>تاریخ تولد</b> : <i>{teacher.birthday}</i> <br />
                        </CardTitle>
                    </Card>
                </Col>
            ) : null}
        </Fragment>
    );
};

export default MyTeacher;
