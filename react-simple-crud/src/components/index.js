import { useLocation } from "react-router-dom" //Esto es para elegir la ruta exacta en donde queremos que aparezcan los elementos.

const Body =({toggle, buttonValue})=>{
    const location = useLocation()
    return(
        <div className='header'>
            <div className='title'>
            <h1>Simple crud</h1>
            </div>
            {location.pathname==='/' && (<div className='divButton'>
            <button className='button' onClick={toggle}>Add</button>
            </div>)}
        </div>
    )
}

export default Body