import React, { useContext } from "react";
import { Table } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import SetHeadTables from "../Common/setHeadTables";

const TeachersTable = ({ teachers }) => {
    const { teacherTitles, teacherTitlesMobile, windowWidth } = useContext(
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
                    <SetHeadTables feilds={teacherTitles} />
                ) : (
                    <SetHeadTables feilds={teacherTitlesMobile} />
                )}
            </thead>
            <tbody>
                {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                        <th scope='row'>{teacher.id}</th>
                        <td>{teacher.firstname}</td>
                        <td>{teacher.lastname}</td>
                        {windowWidth <= 510 ? null : (
                            <td>{teacher.fatherName}</td>
                        )}
                        {windowWidth <= 510 ? null : (
                            <td>{teacher.shenasnameCode}</td>
                        )}
                        {windowWidth <= 510 ? null : (
                            <td>{teacher.classNumber}</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TeachersTable;
