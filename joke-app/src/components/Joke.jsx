import React from 'react'

function Joke(props){
    return (
        <div className="wrapper">
            <h1 style={{display:props.title ? 'block':'none'}}>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Joke