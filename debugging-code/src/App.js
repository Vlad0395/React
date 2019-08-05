import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            
        })
    }
    render() {
        return (
            <form action="">
                <input type="text" placeholder="First Name" name="firstName" value ={this.state.firstName} onChange={this.handleChange} />
                <h1>{this.state.firstName}</h1>
                <input type="text" placeholder="Last Name" name="lastName" value ={this.state.lastName} onChange={this.handleChange} />
                <h2>{this.state.lastName}</h2>
            </form>
        )
    }
}

export default App