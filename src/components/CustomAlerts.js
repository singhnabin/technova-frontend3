import React from 'react';
import { Alert } from 'react-bootstrap';

function CustomAlerts(props) {
    return (
        <Alert variant={props.color}>
            {props.info}



        </Alert>
    );
}

export default CustomAlerts;