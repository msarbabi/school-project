import { Card, CardTitle, CardText, Col } from "reactstrap";
import React from "react";

const Students = () => {
    return (
        <Col sm='6' className='cool'>
            <Card body>
                <CardTitle>دانش آموزان</CardTitle>
                <CardText>لیست دانش آموزان</CardText>
                {/* <Button>Go somewhere</Button> */}
            </Card>
        </Col>
    );
};

export default Students;
