import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 >ERROR 404</h1>

            <NavLink to='/home'>
                <button className="buttonHE"> Back to home</button>
            </NavLink>
        </div>
    )
}

export default Error;