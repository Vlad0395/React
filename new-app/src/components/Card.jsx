import React from 'react'
import {Link} from 'react-router-dom'
function Card(props){
    return (
        <div className="card">
            <Link rel="stylesheet" to={"/viewercard/"+props.id}><p>{props.name} №{props.id}</p></Link>
        </div>
    )
}

export default Card