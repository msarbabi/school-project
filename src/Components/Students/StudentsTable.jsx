import React, { useContext } from "react";
import { Table } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import SetHeadTables from "../Common/setHeadTables";

const StudentsTable = ({ students }) => {
    const { studentTitles, studentTitlesMobile, windowWidth } = useContext(
        UtilsContext
    );

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
                {windowWidth > 510 ? (
                    <SetHeadTables feilds={studentTitles} />
                ) : (
                    <SetHeadTables feilds={studentTitlesMobile} />
                )}
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <th scope='row'>{student.id}</th>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        {windowWidth <= 510 ? null : (
                            <td>{student.fatherName}</td>
                        )}
                        {windowWidth <= 510 ? null : (
                            <td>{student.shenasnameCode}</td>
                        )}
                        {windowWidth <= 510 ? null : (
                            <td>{student.classNumber}</td>
                        )}

                        <td>۲۰</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default StudentsTable;
