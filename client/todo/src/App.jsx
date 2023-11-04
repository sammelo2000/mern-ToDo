import { useEffect, useState } from "react";
import TodoItem from "../src/to-do/TodoItem";

const API_BASE= 'http://localhost:4001/todo';

function App() {

  const [items, setItems] = useState([]);

 
 useEffect(() => {
    GetTodos();
  }, []);


 const GetTodos = () => {
  fetch(API_BASE)
  .then(res => res.json())
  .then(data => setItems(data))
  .catch(err => console.log(err))
 }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text'></input>
        <button>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
      {items.map((item)=> {
        const {_id, name} = item
        return  <TodoItem name={name} id={_id} setItems={setItems}/>   
      })
      }
      </div>
    </div>
 
  );
}

export default App;