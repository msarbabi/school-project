import React, { useContext } from "react";
import { Table } from "reactstrap";
import { UtilsContext } from "../../context/utilsContext";
import SetHeadTables from "../Common/setHeadTables";

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
                        <td>{myClass.teacherName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ClassesTable;
