import React, { Component } from 'react'

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
           <main>
               <div>
                   Hi Login
               </div>
           </main>
        );
    }
}

export default Login;
