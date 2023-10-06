const { User } = require("../DB_connections")

const postUser = async (req, res) => {
    const { id, email, password } = req.body
    if (!email || !password) return res.status(400).send("Faltan datos")
    /*if(email && password) {
        const user = await User.findOrCreate(req.body)
        return res.status(200).json(user)
    } 
    return res.status(400).send("Faltan datos") 
    */
    try {
        const user = await User.findOrCreate({
            where: {
                id,
                email,
                password
            }
        })
        return res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = postUser