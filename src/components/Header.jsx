import { useState } from "react"

const Header = ({setList, list}) => {

const [inner, setİnner] = useState("")

const handleChange = (e) =>{
  setİnner(e.target.value)
}

const handleClick=()=>{ 
  setList([...list, {
    id: new Date().getTime(),
    todo:(inner),}]);
    setİnner("")}

  return (
    <header>
        <h1>Todo App</h1>
        <input type="text" value={inner} placeholder="what are we doing today" onChange={handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
        <h2>Todos</h2>
    </header>
  )
}

export default Header