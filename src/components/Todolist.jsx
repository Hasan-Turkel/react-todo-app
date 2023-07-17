


const Todolist = ({setList, list}) => {

  

  const handleDelete=(id)=>{
    setList(list.filter((item)=>item.id!==id));
    localStorage.setItem("list", JSON.stringify(list))
  }
  
  const handleDouble=(id)=>{setList(
    list.map((item) =>
      item.id === id ? { ...item, toogle: !item.toogle } : item
    )
  )
  }

  return (
  <main >
    {list?.map(({id, todo, toogle})=> (<div onDoubleClick={()=>handleDouble(id)} key={id}  className={toogle ? "red list" : "list"}> 
  <p>
      {todo}
  </p>
  <span onClick={()=>handleDelete(id)}>
  💣
  </span>
</div>
    ))}     
     </main>
  )
}

export default Todolist