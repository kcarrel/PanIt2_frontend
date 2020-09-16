
import React from 'react'
import Card from "react-bootstrap/Card";

const Item = (props) => (

    <div>
        <Card>
            <Card.Header>
                {props.item.name}
            </Card.Header>
            <Card.Body> 
                Brand: {props.item.brand}
                Expiration: {props.item.expiration}
                Notes: {props.item.notes}
            </Card.Body>
        </Card>
    </div>
);

export default Item