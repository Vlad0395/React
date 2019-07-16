import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/joke.css'
import Joke from './components/Joke'
function App() {
  return (
    <div className="App">
        <Joke
            title = ''
            text = 'I was in the gym earlier and decided to jump on the treadmill.'
        />
        <Joke
            title = 'LOWER YOUR EXPECTATIONS'
            text = 'Have you heard the one about the bad pole-vaulter? It never goes over very well.'
        />
        <Joke
            title = 'EITHER OAR'
            text = 'The boating store was having a big sale on canoes. It was quite the oar deal..'
        />
        <Joke
            title = 'STEVE MARTIN ON SUCCESS'
            text = 'Some people just have a way with words, and other people … oh … not have way.'
        />
        <Joke
            title = 'GORE VIDAL ON THE FOUR MOST BEAUTIFUL WORDS'
            text = 'The four most beautiful words in our common language:  I told you so.

            '
        />


    </div>
  );
}

export default App;
