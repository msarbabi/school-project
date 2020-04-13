import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const Teachers = () => {
    return (
        <Col sm='6' className='cool'>
            <Card body>
                <CardTitle>معلمان</CardTitle>
                <CardText>لیست معلمان</CardText>
                {/* <Button>Go somewhere</Button> */}
            </Card>
        </Col>
    );
};

export default Teachers;
