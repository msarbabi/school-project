import React, { useState } from "react";
import { Form, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../redux/action/teacherActions/addTeacher";
import { datepicker } from "../../Utils/datepicker";

const AddTeacher = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [fatherName, setFatherName] = useState();
    const [shenasnameCode, setShenasnameCode] = useState();
    const [lesson, setLesson] = useState();
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();

    const dispatch = useDispatch();

    const len = useSelector((state) => state.teachers).length;
    const { days, months, years } = datepicker();

    const handleSubmit = (event) => {
        event.preventDefault();
        const teacher = {
            firstname,
            lastname,
            fatherName,
            shenasnameCode,
            lesson,
            id: len + 1,
            birthday: `${year}/${month}/${day}`,
        };
        dispatch(addTeacher(teacher));
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
                        onChange={(e) => setFirstname(e.target.value)}
                    />
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
                        onChange={(e) => setLastname(e.target.value)}
                    />
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
                        onChange={(e) => setFatherName(e.target.value)}
                    />
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
                        onChange={(e) => setShenasnameCode(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
                <Label for='lesson' sm={2}>
                    درس
                </Label>
                <Col sm={10}>
                    <Input
                        type='text'
                        name='lesson'
                        id='lesson'
                        onChange={(e) => setLesson(e.target.value)}
                    />
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

export default AddTeacher;
