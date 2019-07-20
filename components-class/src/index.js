import React,{Component} from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return (
            <div>
                <h1>Is state important to know?{this.state.answer}</h1>
            </div>
        )
    }
}
// Constructor()

ReactDOM.render(<App />, document.getElementById("root"))