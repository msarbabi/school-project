import React from "react";
import { Table } from "reactstrap";

const StudentsTable = ({ students, width }) => {
    return (
        <Table
            size='sm'
            style={{ textAlign: "center" }}
            hover
            responsive
            bordered
            striped
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    {width <= 510 ? null : <th>نام پدر</th>}
                    {width <= 510 ? null : <th>شماره شناسنامه</th>}
                    {width <= 510 ? null : <th>کلاس</th>}

                    <th>معدل</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr>
                        <th scope='row'>{student.id}</th>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        {width <= 510 ? null : <td>{student.fatherName}</td>}
                        {width <= 510 ? null : (
                            <td>{student.shenasnameCode}</td>
                        )}
                        {width <= 510 ? null : <td>{student.classNumber}</td>}

                        <td>۲۰</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default StudentsTable;
