
import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = (props) => (
  <div>
    <div class="item-container">
      <div class="row">
        <div className="col-sm-12 my-auto">
          <Card className="d-flex">
            <Card.Header className="d-flex justify-content-between">
              {props.item.name}
              <Button>Edit</Button>
            </Card.Header>
            <Card.Body>
              <p>Brand: {props.item.brand}</p>
              <p>Expiration: {props.item.expiration}</p>
              <p>Notes: {props.item.notes}</p>
            </Card.Body>
            
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Item