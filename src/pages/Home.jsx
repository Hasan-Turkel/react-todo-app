import Header from "../components/Header"
import Todolist from "../components/Todolist"
import {useState} from "react";


const Home = () => {

    const [list, setList] = useState([])
  return (
    <>
    <Header setList = {setList} list={list}/>
    <Todolist setList = {setList} list={list}/>
    </>
  )
}

export default Home