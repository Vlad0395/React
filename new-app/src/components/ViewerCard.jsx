import React, { Component } from 'react'
import ComponentCard from './ComponentCard'
import Cards from './ComponentCard';

class ViewerCard extends Component {
    render() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var id = url.searchParams.get('1') 
        console.log(id)
        for (let i = 0; i < ComponentCard.length; i++) {
            if (ComponentCard[i] ) {
                return (
                    <div>
                        <h1>ViewerPage {ComponentCard[i].id}</h1>
                    </div>
                )
            }
            
        }
    }
}

export default ViewerCard