import { Link } from "react-router-dom" //Esto es para no recargar la página.
const About =()=>{
    return(
        <div>
            <h4>About page</h4>
            <Link to="/">Go back</Link>
        </div>
    )
}
export default About