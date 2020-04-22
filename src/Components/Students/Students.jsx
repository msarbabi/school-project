import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Col, Card, CardTitle, CardBody, Button } from "reactstrap";

import AddStudent from "./AddStudent";
import StudentsTable from "./StudentsTable";
import NotFoundThing from "../Common/NotFoundThing";
import { UtilsContext } from "../../context/utilsContext";

const Students = () => {
    const [newStudent, setNewStudent] = useState(false);
    const { windowWidth } = useContext(UtilsContext);
    const studentsData = useSelector((state) => state.students);
    const cls = useSelector((state) => state.classes);

    return (
        <Col sm={windowWidth <= 1000 ? "12" : "8"} className='cool'>
            <Card
                body
                outline
                color='success'
                style={{ textAlign: "center", padding: "3% 0", margin: 0 }}
            >
                <CardTitle>لیست دانش آموزان</CardTitle>
                <CardBody>
                    {studentsData.length === 0 ? (
                        <NotFoundThing message='هیچ دانش آموزی وجود ندارد' />
                    ) : (
                        <StudentsTable students={studentsData} />
                    )}
                </CardBody>
                {cls.length ? (
                    <Button
                        block
                        color='success'
                        onClick={() => setNewStudent(!newStudent)}
                        className='m-auto'
                        style={{ width: "97%" }}
                    >
                        دانش آموز جدید
                    </Button>
                ) : (
                    <Button
                        block
                        color='success'
                        onClick={() => setNewStudent(!newStudent)}
                        className='m-auto'
                        style={{ width: "97%" }}
                        disabled
                    >
                        دانش آموز جدید
                    </Button>
                )}
                {newStudent ? <AddStudent /> : null}
            </Card>
        </Col>
    );
};

export default Students;
