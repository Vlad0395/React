import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn === true ? 'in' : 'out'}</h1>
      </div>
    )
  }
}

export default App