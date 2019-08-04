import React, { Component } from "react";


class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Vlad',
            age: 24,
            answer: false
        }
    }
    render() {
        return (
            // <div>
            //     <h1>{this.state.name}</h1>
            //     <h3><font color="#3AC1EF">▍{this.state.age} years old</font></h3>
            //     <h1>You are currently logged {this.state.answer ? 'in':'out'}</h1>
            // </div>
            <div>
                <img src="https://www.fillmurray.com/200/150" onMouseOver={()=>console.log('I was over')}/>
                <br />
                <span>I is text {this.state.age}</span>
                <br />
                <button onClick={()=>this.setState({age:this.state.age + 1})}>Click me</button>
            </div>
        )
    }
}

export default App





