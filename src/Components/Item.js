
import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = (props) => (
  <div>
    <Card>
      <Card.Header>{props.item.name}</Card.Header>
      <Card.Body>
        <p>Brand: {props.item.brand}</p>
        <p>Expiration: {props.item.expiration}</p>
        <p>Notes: {props.item.notes}</p>
      </Card.Body>
      <div align="right">
        <Button>Edit</Button>
      </div>
    </Card>
  </div>
);

export default Item