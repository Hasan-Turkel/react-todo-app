import Header from "../components/Header"
import Todolist from "../components/Todolist"
import {useState} from "react";


const Home = () => {
    
    const [list, setList] = useState(JSON.parse(localStorage.getItem("list"))||[]);
    localStorage.setItem("list", JSON.stringify(list));
    
    const handleLocale = ()=>{
        setList([])
    }
    
  return (
    <>
    <Header setList = {setList} list={list}/>
    <Todolist setList = {setList} list={list}/>
    {list.length > 0 && <button className="cleaner" onClick={handleLocale}>Start a new day </button>}
   
    </>
  )
}

export default Home