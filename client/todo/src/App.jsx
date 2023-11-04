import { useEffect, useState } from "react";
import TodoItem from "../src/to-do/TodoItem";

const API_BASE= 'http://localhost:4001/todo';

function App() {

  const [items, setItems] = useState([]);
  const [input,setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

 
 useEffect(() => {
    GetTodos();
  }, []);


 const GetTodos = () => {
  fetch(API_BASE)
  .then(res => res.json())
  .then(data => setItems(data))
  .catch(err => console.log(err));
 }

 const addItem = async() => {
  const data = await fetch(API_BASE + "/new",{
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({
      name: input,
    })
  }).then(res => res.json());
  await GetTodos();
  setInput("");
 }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={()=> addItem()}>
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