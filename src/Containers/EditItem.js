import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class EditItem extends Component {
    constructor(props){
    super()
    this.state = {
        brand: '',
        open_on: '',
        expiration: '',
        notes: '',
        name: '',
        product_type: '',
        rating: '',
        favorite: ''
    }
    }

    render() {
        return (
          <div class="container">
            <div class="row h-100">
              <div className="col-sm-12 my-auto">
                <Card>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} xs="auto" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" />
                      </Form.Group>

                      <Form.Group as={Col} xs="auto" controlId="formBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="brand" placeholder="Brand" />
                      </Form.Group>
                      
                      <Form.Group
                        as={Col}
                        xs="auto"
                        controlId="formFavoriteCheckbox"
                      >
                        <Form.Check type="checkbox" label="Favorite" />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} controlId="formNotesTextArea">
                      <Form.Label>Notes</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <div align="right">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card>
              </div>
            </div>
          </div>
        );
    }
}

export default EditItem;