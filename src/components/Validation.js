const validation = (userData) => {
    const errors = {}

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userData.email)) {
        errors.email = "Por favor, introduce un email válido."
    }
    if (!userData.email) errors.email = "Ingresa tu email.";
    if (userData.email.length > 35) errors.email = "No puede tener más de 35 caracteres.";

    if (!/^(?=.*\d)[\w\d]{6,10}$/.test(userData.password)) {
        if (!userData.password) errors.password = "Ingresa tu password."
        errors.password = "Por favor, introduce un password válido."
    }

    return errors;
}

export default validation 