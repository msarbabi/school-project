import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const Classes = () => {
    return (
        <Col sm='6' className='cool'>
            <Card body>
                <CardTitle>کلاس ها</CardTitle>
                <CardText>لیست کلاس ها</CardText>
                {/* <Button>Go somewhere</Button> */}
            </Card>
        </Col>
    );
};

export default Classes;
