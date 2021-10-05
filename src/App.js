import React, { Component } from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'


class App extends Component {

  state = {
    user: {},
    books: []
  }

  signUp = (user) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          name: user.name,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(user => this.setState({ user }))
  }

  login = (user) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token)
        this.setState({
          user: data.user
        })
      }
    })

  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => this.setState({books: data}))
    .catch(err => console.log(err))
  }
 
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
        {this.state.user.username ? <h1>Welcome {this.state.user.username}</h1> : 
          <div>
            <Login login={this.login} />
            <SignUp  signUp={this.signUp} />
          </div>
        }
        </div>
        {this.state.books.map(book => 
          <div>
            <h2>{book.title} </h2>
            <h3> user: {book.user.username} </h3>
            <h3> author: {book.author.name} </h3>
            <h3> genre: {book.genre.name} </h3>
            <p> description: {book.description} </p>
          </div>
        )}
      </div>
    )
  }
}

export default App;
