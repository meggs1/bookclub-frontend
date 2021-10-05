import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: ''
    }
    render() {
        return (
            <form>
                <h1>Sign up form</h1>
                <label>Name: </label>
                <input name="name" />
                <label>Username: </label>
                <input name="username" />
                <label>Password: </label>
                <input name="password" type="password"/>
                <input type="submit" value="Sign up"/>
            </form>
        )
    }
}

export default SignUp