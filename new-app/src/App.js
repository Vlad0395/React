import React from 'react';
import Card from './components/Card'
import ComponentCard from './components/ComponentCard'
import Header from './components/Header'
import './App.css';
import './index.css';

function App() {
    const Cards = ComponentCard.map(joke => <Card className ="card" key ={joke.id} name={joke.name}/>)
  
    return (
        <div>
        <Header/>
        <div className = "container">
            {Cards} 
        </div>
    </div>
    )
}

export default App;
