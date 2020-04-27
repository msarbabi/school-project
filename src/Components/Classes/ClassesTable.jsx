import React, { useContext } from "react";
import { Table } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import SetHeadTables from "../Common/setHeadTables";
import { Link } from "react-router-dom";

const ClassesTable = ({ classes }) => {
    const { classTitles } = useContext(UtilsContext);

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
                <SetHeadTables feilds={classTitles} />
            </thead>
            <tbody>
                {classes.map((myClass) => (
                    <tr key={myClass.id}>
                        <th scope='row'>{myClass.id}</th>
                        <td>{myClass.classLesson}</td>
                        <td>{myClass.classNumber}</td>
                        <td>{myClass.students.length}</td>
                        <td>{myClass.teacherName}</td>
                        <td>
                            <Link
                                to={`/class/${myClass.id}`}
                                className='table-links'
                            >
                                جزییات
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ClassesTable;
