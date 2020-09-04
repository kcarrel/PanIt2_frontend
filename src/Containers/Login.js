import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            hasTyped: false
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
        this.setState({ hasTyped: true })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        //post to user database
        fetch('https://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            })
        })
            .then(r => r.json())
            .then(json => {
                if (json.user) {
                    localStorage.setItem('UserID', json.user.id);
                    localStorage.setItem('Token', json.token);
                } else {
                    alert("User information not found. Please try again.")
                }
            })
    }

       

    render() {
        return (
            <div class="container">
                <div class="row h-100">
                    <div className="col-sm-12 my-auto">
                        <Card className="d-flex auth-inner">
                            <Card.Body>
                                <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
