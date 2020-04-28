import React, { useState, useRef } from "react";
import { Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleReactValidator from "simple-react-validator";

import { addStudent } from "../../redux/action/studentActions/addStudent";
import { datepicker } from "../../Utils/datepicker";
import { convertToEnglish } from "../../Utils/convertNumber";

const AddStudent = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [fatherName, setFatherName] = useState();
    const [shenasnameCode, setShenasnameCode] = useState();
    const [fatherNumber, setFatherNumber] = useState();
    const [homeNumber, setHomeNumber] = useState();
    const [classNumber, setClassNumber] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [studentInfo, setStudentInfo] = useState();
    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const len = useSelector((state) => state.students).length;
    const classes = useSelector((state) => state.classes);
    const { years, days, months } = datepicker();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی است.",
                min: "تعداد کاراکتر کمتر از حد مجاز است.",
                max: "تعداد کاراکتر بیش از حد مجاز است.",
                integer: "لطفا عدد وارد کنید.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const student = {
            firstname,
            lastname,
            fatherName,
            shenasnameCode,
            fatherNumber,
            homeNumber,
            classNumber: classNumber
                ? classNumber
                : document.getElementById("classNumber").value,
            studentInfo,
            id: len + 1,
            birthday: `${year ? year : document.getElementById("year").value}/${
                month ? month : document.getElementById("month").value
            }/${day ? day : document.getElementById("day").value}`,
        };
        if (validator.current.allValid()) {
            dispatch(addStudent(student));
        } else {
            validator.current.showMessageFor("firstname");
            validator.current.showMessageFor("lastname");
            validator.current.showMessageFor("fatherName");
            validator.current.showMessageFor("shenasnameCode");
            validator.current.showMessageFor("fatherNumber");
            validator.current.showMessageFor("homeNumber");

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
                <Label for='firstname' sm={2}>
                    نام
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='firstname'
                        id='firstname'
                        onChange={(e) => {
                            setFirstname(e.target.value);
                            validator.current.showMessageFor("firstname");
                        }}
                    />
                    {validator.current.message(
                        "firstname",
                        firstname,
                        "required|min:2"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='lastname' sm={2}>
                    نام خانوادگی
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='lastname'
                        id='lastname'
                        onChange={(e) => {
                            setLastname(e.target.value);
                            validator.current.showMessageFor("lastname");
                        }}
                    />
                    {validator.current.message(
                        "lastname",
                        lastname,
                        "required|min:2"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='fatherName' sm={2}>
                    نام پدر
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='fatherName'
                        id='fatherName'
                        onChange={(e) => {
                            setFatherName(e.target.value);
                            validator.current.showMessageFor("fatherName");
                        }}
                    />
                    {validator.current.message(
                        "fatherName",
                        fatherName,
                        "required|min:2"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='shenasnameCode' sm={2}>
                    شماره شناسنامه
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='shenasnameCode'
                        id='shenasnameCode'
                        onChange={(e) => {
                            setShenasnameCode(convertToEnglish(e.target.value));
                            validator.current.showMessageFor("shenasnameCode");
                        }}
                    />
                    {validator.current.message(
                        "shenasnameCode",
                        shenasnameCode,
                        "required|integer|min:10|max:10"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='fatherNumber' sm={2}>
                    شماره همراه پدر
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='fatherNumber'
                        id='fatherNumber'
                        onChange={(e) => {
                            setFatherNumber(convertToEnglish(e.target.value));
                            validator.current.showMessageFor("fatherName");
                        }}
                    />
                    {validator.current.message(
                        "fatherNumber",
                        fatherNumber,
                        "required|integer|min:11|max:11"
                    )}
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='homeNumber' sm={2}>
                    تلفن منزل
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='homeNumber'
                        id='homeNumber'
                        onChange={(e) => {
                            setHomeNumber(convertToEnglish(e.target.value));
                            validator.current.showMessageFor("homeNumber");
                        }}
                    />
                    {validator.current.message(
                        "homeNumber",
                        homeNumber,
                        "required|integer|min:11|max:11"
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
                        type='select'
                        name='classNumber'
                        id='classNumber'
                        onChange={(e) => setClassNumber(e.target.value)}
                    >
                        {classes.map((cls) => (
                            <option key={cls.id}>{cls.classNumber}</option>
                        ))}
                    </Input>
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='shenasnameCode' sm={3}>
                    تاریخ تولد
                </Label>
                <Col sm={3}>
                    <Input
                        type='select'
                        name='day'
                        id='day'
                        placeholder='روز'
                        onChange={(e) => setDay(e.target.value)}
                    >
                        {days.map((day) => (
                            <option key={day}>{day}</option>
                        ))}
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input
                        type='select'
                        name='month'
                        id='month'
                        placeholder='ماه'
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        {months.map((month) => (
                            <option key={month}>{month}</option>
                        ))}
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input
                        type='select'
                        name='year'
                        id='year'
                        placeholder='سال'
                        onChange={(e) => setYear(e.target.value)}
                    >
                        {years.map((year) => (
                            <option key={year}>{year}</option>
                        ))}
                    </Input>
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='studentInfo' sm={2}>
                    درباره دانش آموز
                </Label>
                <Col sm={10}>
                    <Input
                        type='textarea'
                        name='studentInfo'
                        id='studentInfo'
                        onChange={(e) => setStudentInfo(e.target.value)}
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

export default AddStudent;
