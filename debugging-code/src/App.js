import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            destination: "",
            gender: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        placeholder="First Name"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    /><br />
                    <input
                        placeholder="Last Name"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    /><br />
                    <input
                        placeholder="Age"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                    /><br />

                    <label htmlFor="">
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
                    <br />

                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="Kiev">Kiev</option>
                        <option value="Zaporozhye">Zaporozhye</option>
                        <option value="Kherson">Kherson</option>
                    </select>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        /> Kosher?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                        /> LactoseFree?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <div>
                    <p>Your dietary restrictions:</p>
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                </div>
            </main>
        )
    }
}

export default App