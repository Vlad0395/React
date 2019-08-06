import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            description: "",
            gender:"",
            favColor:"blue",
            isFriendly: true
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br/>
                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br/>
                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChangeS}
                /><br/>
                <label htmlFor="isFriendly"> isFriendly?
                    <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange} />
                </label>
                <h1>{this.state.firstName}</h1>
                <h2>{this.state.lastName}</h2>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <h2><font color="#3AC1EF">You are a {this.state.gender}</font></h2>
                <label htmlFor="favColor">Favorite Color:
                <select 
                    name="favColor"
                    value={this.state.favColor}
                    onChange={this.handleChange}
                >
                    <option value = "blue" >Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yelllow">Yellow</option>
                </select>
                </label>
                <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>
            </form>
        )
    }
}

export default App