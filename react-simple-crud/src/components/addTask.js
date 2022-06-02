import {useState} from 'react'

const AddTask =({add})=>{
    const [title, setTitle]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()
        add({title,day,reminder}) //Added to task in App.js
        setTitle('')
        setDay('')
        setReminder(false)
    }
return(
    <form className="form" onSubmit={onSubmit}>
        <div className="formName">
        <label>Name</label>
        <input type='text' className="input" value={title} onChange={e=>setTitle(e.target.value)}></input>
        </div>
        <div className="formName">
        <label>Day</label>
        <input type='text' className="input" value={day} onChange={e=>setDay(e.target.value)}></input>
        </div>
        <input type='submit' value='Save task' className='submitButton'></input>
    </form>
)
}
export default AddTask