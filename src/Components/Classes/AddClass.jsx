import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import SimpleReactValidator from "simple-react-validator";

import { addClass } from "../../redux/action/classActions/addClass";
import { convertToEnglish } from "../../Utils/convertNumber";

const AddClass = () => {
    const [classLesson, setClassLesson] = useState();
    const [classNumber, setClassNumber] = useState();
    const [teacherName, setTeacherName] = useState();
    const [classInfo, setClassInfo] = useState();
    const [, forceUpdate] = useState();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی است.",
                min: "شماره کلاس باید ۳ رقمی باشد.",
                max: "شماره کلاس باید ۳ رقمی باشد.",
                integer: "شماره کلاس باید عدد باشد.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const dispatch = useDispatch();
    const len = useSelector((state) => state.classes).length;
    const teachers = useSelector((state) => state.teachers);

    const handleSubmit = (event) => {
        event.preventDefault();
        const myClass = {
            classLesson,
            classNumber,
            teacherName: teacherName
                ? teacherName
                : document.getElementById("teacherName").value,
            classInfo,
            students: [],
            id: len + 1,
        };
        if (validator.current.allValid()) {
            dispatch(addClass(myClass));
        } else {
            validator.current.showMessageFor("classLesson");
            validator.current.showMessageFor("classNumber");

            forceUpdate(1);
        }
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
                        onChange={(e) => {
                            setClassLesson(e.target.value);
                            validator.current.showMessageFor("classLesson");
                        }}
                    />
                    {validator.current.message(
                        "classLesson",
                        classLesson,
                        "required|min:2"
                    )}
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
                        onChange={(e) => {
                            setClassNumber(convertToEnglish(e.target.value));
                            validator.current.showMessageFor("classNumber");
                        }}
                    />
                    {validator.current.message(
                        "classNumber",
                        classNumber,
                        "required|integer|min:3|max:3"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='teacherName' sm={2}>
                    نام دبیر
                </Label>
                <Col sm={10}>
                    <Input
                        type='select'
                        name='teacherName'
                        id='teacherName'
                        onChange={(e) => setTeacherName(e.target.value)}
                    >
                        {teachers.map((teacher) => (
                            <option
                                key={teacher.id}
                            >{`${teacher.firstname} ${teacher.lastname}`}</option>
                        ))}
                    </Input>
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
