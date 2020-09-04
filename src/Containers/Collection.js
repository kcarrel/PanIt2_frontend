import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div class="container">
        <div class="row h-100">
          <div className="col-sm-12 my-auto">
            <Card className="d-flex auth-inner">
              <Card.Body>
                Hi this is your collection
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
