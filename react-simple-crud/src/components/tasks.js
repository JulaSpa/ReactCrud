import Task from './task'

const Tasks =({jsonTasks, deleteTask, reminder})=>{

return(
    <div>
        {jsonTasks.map(e=>(
            <Task key={e.id} e={e} deleteTask={deleteTask} reminder={reminder}/>
        ))}
    </div>
)
}
export default Tasks