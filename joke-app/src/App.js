import React from 'react';
import './App.css';
import './components/joke.css'
import Joke from './components/Joke'
import jokesData from './components/jokesDate'

function App() {
    
    const jokeComponents = jokesData.map(joke => <Joke key ={joke.id} question ={joke.question} punchLine={joke.punchLine}/>)
  
    return (
    <div>
        {jokeComponents}
    </div>
    )
}

export default App;
