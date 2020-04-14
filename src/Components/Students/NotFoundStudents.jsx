import React from "react";
import { Card } from "reactstrap";

const NotFoundStudents = ({ width }) => {
    return width <= 1000 ? (
        <Card body inverse color='danger'>
            <h4>هیچ دانش آموزی وجود ندارد</h4>
        </Card>
    ) : (
        <Card body inverse color='danger'>
            <h1>هیچ دانش آموزی وجود ندارد</h1>
        </Card>
    );
};

export default NotFoundStudents;
