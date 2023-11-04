import React, {useState} from "react";
const API_BASE = 'http://localhost:4001/todo'
function TodoItem(props){

 const {name,id,setItems} = props;

 const deleteTodo = async(id) => {
    try{
        const response = await fetch(API_BASE + "delete/" + id, {
            method: "DELETE",
        });
        if(!response.ok) {
            throw new Error("Failed to delete task");

        }
        const data = await response.json();
        setItems(items => items.filter(item => item._id !== data._id));

    }catch (error) {
        console.error("Error updating task status", error);
    }
 }

    return(
     <div className="todo">
        <div className="text">{name}</div>
        <div className="delete-todo"><span >X</span></div>
      </div>
    )
}

export default TodoItem;