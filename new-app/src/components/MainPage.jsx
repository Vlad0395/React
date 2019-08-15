import React, { Component } from 'react';
import Card from './Card'
import ComponentCard from './ComponentCard'
import Header from './Header'


class MainPage extends Component {
    render() {
        const Cards = ComponentCard.map(joke => <Card className="card" key={joke.id} name={joke.name} id={joke.id} />)
        console.log(ComponentCard);

        return (
            <div>
                <Header />
                
                <div className="container">
                    {Cards}
                </div>
            </div>
        )
    }
}


export default MainPage;
