import React, { Component } from 'react'

class Login extends Component {
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
        this.props.login(this.state)
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Log in form</h1>
                <label>Username: </label>
                <input name="username" onChange={this.handleChange}/>
                <label>Password: </label>
                <input name="password" type="password" onChange={this.handleChange}/>
                <input type="submit" value="Log in"/>
            </form>
        )
    }
}

export default Login