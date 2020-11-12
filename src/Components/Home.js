
import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = (props) => (
  <div>
    <div class="account-container">
      <div class="row">
        <div className="col-sm-12 my-auto">
          <Card className="d-flex">
            <Card.Header className="d-flex justify-content-between">
              Your name
            </Card.Header>
            <Card.Body>
              Your information
            </Card.Body>
            
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Home