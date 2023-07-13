

const Todolist = ({setList, list}) => {
  const handleDelete=(id)=>{
    setList(list.filter((item)=>item.id!=id))
   
  }
  return (
  <main >
    {list.map(({id, todo})=> (<div key={id}  className="list"> 
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