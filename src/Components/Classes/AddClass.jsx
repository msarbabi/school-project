import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { addClass } from "../../redux/action/classActions/addClass";

const AddClass = () => {
    const [classLesson, setClassLesson] = useState();
    const [classNumber, setClassNumber] = useState();
    const [teacherName, setTeacherName] = useState();
    const [classInfo, setClassInfo] = useState();

    const dispatch = useDispatch();
    const len = useSelector((state) => state.classes).length;

    const handleSubmit = (event) => {
        event.preventDefault();
        const myClass = {
            classLesson,
            classNumber,
            teacherName,
            classInfo,
            id: len + 1,
        };
        dispatch(addClass(myClass));
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className='m-auto mt-5'
            style={{
                width: "97%",
                textAlign: "right",
            }}
        >
            <hr />
            <FormGroup row>
                <Label for='classLesson' sm={2}>
                    نام درس
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='classLesson'
                        id='classLesson'
                        onChange={(e) => setClassLesson(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='classNumber' sm={2}>
                    شماره کلاس
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='classNumber'
                        id='classNumber'
                        onChange={(e) => setClassNumber(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='teacherName' sm={2}>
                    نام دبیر
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='teacherName'
                        id='teacherName'
                        onChange={(e) => setTeacherName(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='classInfo' sm={2}>
                    درباره کلاس
                </Label>
                <Col sm={10}>
                    <Input
                        type='textarea'
                        name='classInfo'
                        id='classInfo'
                        onChange={(e) => setClassInfo(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={{ size: 12 }}>
                    <Button color='success' outline style={{ float: "left" }}>
                        ارسال اطلاعات
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default AddClass;
