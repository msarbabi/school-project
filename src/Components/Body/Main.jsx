import React, { Fragment } from "react";
import { Col, Card, CardText } from "reactstrap";

const Main = () => {
    return (
        <Fragment>
            <Col sm='6' className='cool'>
                <Card body>
                    <CardText>صفحه اصلی</CardText>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Main;
