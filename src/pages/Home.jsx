import Header from "../components/Header"
import Todolist from "../components/Todolist"
import {useState} from "react";


const Home = () => {

    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")))
    const handleLocale = ()=>{
        setList([])
    }
    
  return (
    <>
    <Header setList = {setList} list={list}/>
    <Todolist setList = {setList} list={list}/>
    <button className="cleaner" onClick={handleLocale}>Today is:{new Date().toLocaleDateString().slice(0, 10)} | Start a new day </button>
    </>
  )
}

export default Home