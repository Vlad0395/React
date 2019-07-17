import React from 'react'

function Joke(props){
    return (
        <div className="wrapper">
            <h1 style={{display:props.question ? 'block':'none'}}>Question: {props.question}</h1>
            <p>Answer: {props.punchLine}</p>
        </div>
    )
}

export default Joke