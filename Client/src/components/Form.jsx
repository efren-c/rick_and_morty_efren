import { useState } from "react"
import validation from "./Validation"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({

    })

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({ //se pisa el obj anterior por eso se crea primero la copia
            ...userData,
            [event.target.name]: event.target.value //dinámico por [] y la prop name
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Ingresa tu email" onChange={handleChange} value={userData.email} />
            {errors.email && <p> {errors.email} </p>}

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder=" " onChange={handleChange} value={userData.password} />
            {errors.password && <p> {errors.password} </p>}

            <button disabled={!userData.email || !userData.password || errors.email || errors.password} >Submit</button>
        </form>
    )
}

export default Form