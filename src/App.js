import React, { Component } from 'react'
import SignUp from './components/SignUp'


class App extends Component {

  state = {
    user: {},
    books: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => this.setState({books: data}))
    
  }
 
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
        <SignUp />
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
