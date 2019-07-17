import React, {Fragment} from "react";
import vschoolProducts from './vschoolProducts';
import TodoItem from "./TodoItem";

function TodoItems() {
    return (
        <div className="todo-item">
            <div>
                {vschoolProducts.map(product => <Fragment  key={product.id}> <input type="checkbox" /> <TodoItem product={product} /></Fragment>)}
            </div>
        </div>
    );
}


export default TodoItems