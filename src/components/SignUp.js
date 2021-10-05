import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign up form</h1>
                <label>Name: </label>
                <input name="name" onChange={this.handleChange}/>
                <label>Username: </label>
                <input name="username" onChange={this.handleChange}/>
                <label>Password: </label>
                <input name="password" type="password" onChange={this.handleChange}/>
                <input type="submit" value="Sign up"/>
            </form>
        )
    }
}

export default SignUp