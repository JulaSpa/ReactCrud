import {FaTimes} from 'react-icons/fa'
const Task =({e, deleteTask, reminder})=>{

    return(
        <div className={`task ${e.reminder?'reminder':''}`} onDoubleClick={()=>reminder(e.id)}>
           <h3 className='taskTitle'>{e.title} <FaTimes className='delete' onClick={()=>deleteTask(e.id)}/></h3>
           <p className='taskDay'>{e.day}</p>
        </div>
    )
    }
    export default Task