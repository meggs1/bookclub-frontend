import React, {Component } from 'react'


class App extends Component {
  state = {
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
        {this.state.books.map(book => 
        <div>
          <h2>{book.title} </h2>
          <h3> {book.author.name} </h3>
          <h3> {book.genre.name} </h3>
          <p> {book.description} </p>
        </div>
        )}
      </div>
    )
  }
}

export default App;
