import { useState } from "react"

import Todolist from "./Todolist";



const Header = () => {

const [list, setList] = useState([])
const [inner, setİnner] = useState()

const handleChange = (e) =>{
  setİnner(e.target.value)
}

const handleClick=()=>{ 
  setList(arr=>[...list, {todo:(inner)}]);
  setİnner("")

console.log(list);}


  return (
    <header>
        <h1>Todo App</h1>
        <input type="text" value={inner} placeholder="what are we doing today" onChange={handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
        <main>
        <h2>Todos</h2>
            {list.map((item, i)=>( <Todolist key={i}  content={item.todo} 
            />
            ))}        
        </main>
    </header>
  )
}

export default Header