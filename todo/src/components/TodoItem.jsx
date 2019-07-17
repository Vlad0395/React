import React from 'react'

function TodoItem(props) {
    // console.log(product);
    const product = props.product
    
    return (
        <div>
            <p>id: {product.id}</p>
            <p>name: {product.name}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
        </div>
    )
}

export default TodoItem