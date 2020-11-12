import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class AddItem extends Component {
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
    handleChange = (ev) => {
      const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value

      this.setState({[ev.target.name]: value})
    }

    handleSubmit(ev) {
      ev.preventDefault()
      this.postItem()
    }

    postItem() {
      fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('Token')}`
        },           
        body: JSON.stringify({
          item: {
            brand: this.state.brand,
            name: this.state.name,
            favorite: this.state.favorite,
            notes: this.state.notes
          }
        })
      })
      .then(response => response.json())
      .then(res => (alert(res.message)))
    }

    render() {
        return (
          <div class="container">
            <div class="row h-100">
              <div className="col-sm-12 my-auto">
                <Card>
                  <Card.Body>
                    <Form>
                      <Form.Group as={Row} >
                        <Form.Group as={Col} xs="auto" controlId="formName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control name='name' onChange={this.handleChange} type="name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} xs="auto" controlId="formBrand">
                          <Form.Label>Brand</Form.Label>
                          <Form.Control name='brand' onChange={this.handleChange} type="brand" placeholder="Brand" />
                        </Form.Group>
                        
                        <Form.Group
                          as={Col}
                          xs="auto"
                          controlId="formFavoriteCheckbox"
                        >
                          <Form.Check name='favorite' onChange={this.handleChange} type="checkbox" label="Favorite" />
                        </Form.Group>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formNotesTextArea">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control name='notes' onChange={this.handleChange} as="textarea" rows="3" />
                      </Form.Group>
                      <div align="right">
                        <Button onClick={(ev) => this.handleSubmit(ev)} type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        );
    }
}

export default AddItem;