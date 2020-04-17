import React, { useState, useContext } from "react";
import { Card, CardTitle, Col, CardBody, Button } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import NotFoundThing from "../Common/NotFoundThing";
import { useSelector } from "react-redux";
import TeachersTable from "./TeachersTable";
import AddTeacher from "./AddTeacher";

const Teachers = () => {
    const [newTeacher, setNewTeacher] = useState(false);
    const { windowWidth } = useContext(UtilsContext);
    const teachers = useSelector((state) => state.teachers);
    return (
        <Col sm={windowWidth <= 1000 ? "12" : "8"} className='cool'>
            <Card
                body
                outline
                color='success'
                style={{ textAlign: "center", padding: "3% 0", margin: 0 }}
            >
                <CardTitle>لیست معلمان</CardTitle>
                <CardBody>
                    {teachers.length === 0 ? (
                        <NotFoundThing
                            width={windowWidth}
                            message='هیچ معلمی وجود ندارد.'
                        />
                    ) : (
                        <TeachersTable
                            teachers={teachers}
                            width={windowWidth}
                        />
                    )}
                </CardBody>
                <Button
                    block
                    color='success'
                    onClick={() => setNewTeacher(!newTeacher)}
                    className='m-auto'
                    style={{ width: "97%" }}
                >
                    معلم جدید
                </Button>
                {newTeacher ? <AddTeacher /> : null}
            </Card>
        </Col>
    );
};

export default Teachers;
