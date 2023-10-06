const { User } = require("../DB_connections")

const login = async (req, res) => {
    const { email, password } = req.body

    /* if(email && password) {
    const actualuser = await User.findOne({where: {email: email}})
      if(actualUser) {
        if(actualUser.password === password) {
            return res.json({access: true})
             }
             return res.status(403).send("Contraseña incorrecta")
            } 
        return res.status(404).send("Usuario no encontrado")
    }
    return res.status(400).send("Faltan datos")
    */

    if (!email || !password) return res.status(400).send("Faltan datos")
    try {
        const logUser = await User.findOne({
            where: {
                email
            }
        })

        if (!logUser) return res.status(404).send("Usuario no encontrado")
        return logUser.password === password ?
            res.json({ access: true }) :
            res.status(403).send("Contraseña incorrecta")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = login


/* const users = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query
    const userFound = users.find((user) => user.email === email && user.password === password)

    return userFound
        ? res.status(200).json({ access: true })
        : res.status(404).json({ access: false })

     if (userFound) return res.status(200).json({ access: true })
     return res.status(404).json({access: false})
}

module.exports = { login } */