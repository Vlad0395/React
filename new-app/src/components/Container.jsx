import React, { Component } from 'react'
import Card from "./ComponentCard"
import '../index.css'
class Container extends Component {
    render() {
     Card.map( card=>{
        return (
            <Card id={card.id} punchLine={card.name} />
            )
     })
    }
}

export default Container