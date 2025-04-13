import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos =JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    } 
  }, [])

<<<<<<< HEAD
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const toggleFinished = () => {
=======
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const toggleFinished = (e) => {
>>>>>>> 34b4e21515b64069a78729faa147e23820040b12
    setShowFinished(!showFinished)
  }
  

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("") 
    saveToLS()
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  

  return (
    <>
      <Navbar />
      <div className="container justify-center items-center flex mx-auto my-5 rounded-xl p-5">
          <div className="w-lg  bg-gray-400 shadow-2xl rounded-2xl p-8 ">
          <h2 className="text-xl font-bold text-center m-5">Aaj kya kya krna h</h2>
        <div className="addTodo flex w-full m-5">
          <input onChange={handleChange} value={todo} type="text" className="bg-white rounded-full w-full px-5 py-1 " />
          <button onClick={handleAdd} disabled={todo.length<=3} className="bg-violet-800 disabled:bg-violet-700 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-full mx-6 ">
            Add
          </button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} name="" id="" /> Jo kr chuke wo bhi dikhaya jaye! 
        <h2 className="text-lg font-bold ">Aaj k kaam ka list</h2>
        <div className="todos">
          {todos.length===0 && <div className="m-5">Velle sale kuch kaam add to kr phele</div> }
          {todos.map(item=>{
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className="flex gap-5">
              <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo} </div>
              </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
              <FaEdit />
              </button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
              <RiDeleteBin6Line />
              </button>
            </div>
          </div>
          })}
        </div> 
        </div>
      </div>
    </>
  );
}

export default App;
