import React, { Component } from 'react'
import Cards from "./ComponentCard"
import Card from "./Card"
import '../index.css'
class Container extends Component {
    render() {
        const Cardd = Cards.map(card => <Card key = {card.id} name = {card.name}/>)
        return(
            {Cardd}
            
        )
    }
    }


export default Container