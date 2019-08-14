import React from 'react';
import Card from './Card'
import ComponentCard from './ComponentCard'
import Header from './Header'


function MainPage() {
    const Cards = ComponentCard.map(joke => <Card className ="card" key ={joke.id} name={joke.name} id={joke.id}/>)
    return (
        <div>
        <Header/>
        <div className = "container">
            {Cards} 
        </div>
    </div>
    )
}

export default MainPage;
