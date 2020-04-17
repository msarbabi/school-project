import React from "react";
import { Card } from "reactstrap";

const NotFoundThing = ({ message, width }) => {
    return width <= 1000 ? (
        <Card body inverse color='danger'>
            <h4>{message}</h4>
        </Card>
    ) : (
        <Card body inverse color='danger'>
            <h1>{message}</h1>
        </Card>
    );
};

export default NotFoundThing;
