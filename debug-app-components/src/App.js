import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Vlad',
      age : 24,
      hobbi: 'anythink'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3><font color="#3AC1EF">▍{this.state.age} years old</font></h3>
        <h6><font color="#3AC1EF">▍{this.state.hobbi} cool</font></h6>
      </div>
    )
  }
}

export default App