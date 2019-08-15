import React, { Component } from 'react'
import ComponentCard from './ComponentCard'
import Cards from './ComponentCard';
import {Link} from 'react-router-dom';
class ViewerCard extends Component {
    render() {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        
        console.log(id)
        for (let i = 0; i < ComponentCard.length; i++) {
            if (ComponentCard[i].id == id ) {
                return (
                    <div>
                         <Link rel="stylesheet" to={"/"}><p>Home</p></Link>
                        <h1>{ComponentCard[i].name} {ComponentCard[i].id}</h1>
                        <p>{ComponentCard[i].description} {ComponentCard[i].id}</p>
                        <p>{ComponentCard[i].img} {ComponentCard[i].id}</p>
                    </div>
                )
            }
            
        }
    }
}

export default ViewerCard