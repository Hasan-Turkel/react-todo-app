import { useState } from "react"


const Header = ({setList, list}) => {


const [inner, setİnner] = useState("")

const handleChange = (e) =>{
  setİnner(e.target.value)
}

const handleClick=()=>{inner!==""&&
  setList([...list, {
    id: new Date().getTime(),
    todo:(inner),}]);
    setİnner("");
    inner===""&&alert("inside of the input can't be empty")
    localStorage.setItem("list", JSON.stringify(list))
   };


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