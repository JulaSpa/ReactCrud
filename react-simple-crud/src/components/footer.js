import { Link } from "react-router-dom" //Esto es para no recargar la página.
const Footer =()=>{
    return(
        <footer>
            <Link to="/about">About page</Link>
        </footer>
    )
}
export default Footer