import React, { useState, useContext } from "react";
import { Card, CardTitle, Col, Button, CardBody } from "reactstrap";
import NotFoundThing from "../Common/NotFoundThing";
import { useSelector } from "react-redux";
import { UtilsContext } from "../../context/utilsContext";
import AddClass from "./AddClass";
import ClassesTable from "./ClassesTable";

const Classes = () => {
    const [newClasses, setNewClasses] = useState(false);
    const classes = useSelector((state) => state.classes);
    const teachers = useSelector((state) => state.teachers);
    const { windowWidth } = useContext(UtilsContext);

    return (
        <Col sm={windowWidth <= 1000 ? "12" : "8"} className='cool'>
            <Card
                body
                outline
                color='success'
                style={{ textAlign: "center", padding: "3% 0", margin: "0" }}
            >
                <CardTitle>لیست کلاس ها</CardTitle>
                <CardBody>
                    {classes.length === 0 ? (
                        <NotFoundThing
                            width={windowWidth}
                            message='کلاسی وجود ندارد'
                        />
                    ) : (
                        <ClassesTable classes={classes} />
                    )}
                </CardBody>
                {teachers.length ? (
                    <Button
                        block
                        color='success'
                        onClick={() => setNewClasses(!newClasses)}
                        className='m-auto'
                        style={{ width: "97%" }}
                    >
                        کلاس جدید
                    </Button>
                ) : (
                    <Button
                        block
                        color='success'
                        onClick={() => setNewClasses(!newClasses)}
                        className='m-auto'
                        style={{ width: "97%" }}
                        disabled
                    >
                        کلاس جدید
                    </Button>
                )}

                {newClasses ? <AddClass /> : null}
            </Card>
        </Col>
    );
};

export default Classes;
