import React, { Component } from 'react'
import ComponentCard from './ComponentCard'
import { Link } from 'react-router-dom';
class ViewerCard extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }
    componentDidMount() {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        fetch("https://swapi.co/api/people/" + id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }
    render() {
        // var url = window.location.href;
        // var id = url.substring(url.lastIndexOf('/') + 1);

        // for (let i = 0; i < ComponentCard.length; i++) {
        //     if (ComponentCard[i].id == id ) {
        //         return (
        //             <div>
        //                  <Link rel="stylesheet" to={"/"}><p>Home</p></Link>
        //                 <h1>{ComponentCard[i].name} {ComponentCard[i].id}</h1>
        //                 <p>{ComponentCard[i].description} {ComponentCard[i].id}</p>
        //                 <p>{ComponentCard[i].img} {ComponentCard[i].id}</p>
        //             </div>
        //         )
        //     }

        // }
        console.log(this.state.character);
        
        return (
            <div>
                <Link rel="stylesheet" to={"/"}><p>Home</p></Link>
                <h1>Name: {this.state.character.name}</h1>
                <h2>Birth year: {this.state.character.birth_year}</h2>
            </div>
        )
    }

}



export default ViewerCard