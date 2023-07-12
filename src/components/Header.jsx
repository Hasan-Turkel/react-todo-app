import { useState } from "react"

import Todolist from "./Todolist";



const Header = () => {

// let list =["abc", "abc"]
const [list, setList] = useState([])
const writeDom=(e)=>{
    setList(arr=>[...list, {todo:(e.target.previousElementSibling.value)}]);
}

const handleClick=(e)=>{ 
    writeDom(e);
  
  

console.log(list);}
  return (
    <header>
        <h1>Todo App</h1>
        <input type="text" />
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