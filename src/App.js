import React, {Component } from 'react'


class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
 
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
