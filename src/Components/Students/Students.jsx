import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Card, CardTitle, CardBody, Button } from "reactstrap";

import AddStudent from "./AddStudent";
import StudentsTable from "./StudentsTable";
import NotFoundStudents from "./NotFoundStudents";

const Students = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [newStudent, setNewStudent] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });

    const students = useSelector((state) => state.students);
    return (
        <Col sm={width <= 1000 ? "12" : "8"} className='cool'>
            <Card
                body
                outline
                color='success'
                style={{ textAlign: "center", padding: "3% 0", margin: 0 }}
            >
                <CardTitle>لیست دانش آموزان</CardTitle>
                <CardBody>
                    {students.length === 0 ? (
                        <NotFoundStudents width={width} />
                    ) : (
                        <StudentsTable students={students} width={width} />
                    )}
                </CardBody>
                <Button
                    block
                    color='success'
                    onClick={() => setNewStudent(!newStudent)}
                    className='m-auto'
                    style={{ width: "97%" }}
                >
                    دانش آموز جدید
                </Button>
                {newStudent ? <AddStudent /> : null}
            </Card>
        </Col>
    );
};

export default Students;
