import './App.css'
import json from './app.json'
import Index from './components/index'
import Tasks from './components/tasks';
import AddTask from './components/addTask'
import {useState} from 'react'
function App() {
  const tasksJson = json
  const [tasks, setTasks] = useState(tasksJson)
  const deleteTask=(id)=>{
    setTasks(tasks.filter(e=>e.id!==id))
  }
  const reminder=(id)=>{
    setTasks(tasks.map(e=>e.id === id?{...e, reminder:!e.reminder}:e))
  }
  return (
    <body className='body'>
      <Index/>
      <AddTask/>
      {tasks.length>0?(<Tasks jsonTasks={tasks} deleteTask={deleteTask} reminder={reminder}/>):('no tasks to show')}
      
      </body>
  );
}

export default App;
