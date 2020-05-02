import React from "react";
import { Card } from "reactstrap";

const NotFoundThing = ({ message, width }) => {
    const style = {
        textAlign: "center",
    };

    return width <= 1000 ? (
        <Card body inverse color='danger' style={style}>
            <h4>{message}</h4>
        </Card>
    ) : (
        <Card body inverse color='danger' style={style}>
            <h1>{message}</h1>
        </Card>
    );
};

export default NotFoundThing;
