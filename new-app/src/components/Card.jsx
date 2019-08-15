import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Card extends Component {
    
    render() {
        
        return (
            <div className="card">
                <Link rel="stylesheet" to={"/viewercard/" + this.props.id}><p>{this.props.name} №{this.props.id}</p></Link>
            </div>
        )
    }
}
export default Card