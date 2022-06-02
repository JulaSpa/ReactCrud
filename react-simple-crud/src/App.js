import './App.css'
import ReactDOM from "react-dom";
import Index from './components/index'
import Tasks from './components/tasks';
import AddTask from './components/addTask'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer';
import About from './components/about'
function App() {
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const getTasks=async()=>{
      const tasksServer=await fetchTasks() //Esta función es el req al server.
      setTasks(tasksServer)//Acá setiamos la base de datos a tasks
    }
    getTasks()
  },[])
  const fetchTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const [showForm, setShowForm] = useState (false)
  //DELETE METHOD
  const deleteTask= async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
    }
    )
    setTasks(tasks.filter(e=>e.id!==id))
  }
  //PUT METHOD
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const reminder=async(id)=>{
    const taskToggle = await fetchTask(id)
    const upTask = {...taskToggle, reminder:!taskToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(upTask)
    })
    const data = await res.json()
    setTasks(tasks.map(e=>e.id === id?{...e, reminder:!data.reminder}:e))
  }
  //POST METHOD
  const add =async(task)=>{//task es igual a title, day y reminder (ver addtask)
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) //Osea, el body que le pasamos es el que se modificó en addTask.
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }
 
  return ReactDOM.render(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={
      <div className='body'> 
      <Index toggle={()=>setShowForm(!showForm)}/>
      {showForm===true?<AddTask add={add}/>:''}
      {tasks.length>0?(<Tasks jsonTasks={tasks} deleteTask={deleteTask} reminder={reminder}/>):('no tasks to show')}
      <Footer/>
      </div>
      }/>
      <Route path='/about' element={
        <div className='body'> 
        <Index toggle={()=>setShowForm(!showForm)}/>
      <About/>
        </div>
      }/>
    </Routes>
    </BrowserRouter>
  , document.getElementById("root"));
}

export default App;
