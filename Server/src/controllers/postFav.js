const { Favorite } = require("../DB_connections")

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body
    //if (!name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos")
    if (![id, name, origin, status, image, species, gender].every(Boolean)) return res.status(401).send("Faltan datos")

    try {
        await Favorite.findOrCreate({
            where: {
                id, name, origin, status, image, species, gender
            }
        })
        const allFavs = await Favorite.findAll()

        return res.json(allFavs)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav

/*
const postFav = async (req, res) => {
    try {
    const { id, name, origin, status, image, species, gender } = req.body
        if (id && name && origin &&....){
            await Favorite.findOrCreate(req.body)
             const allFavs = await findAll()
         return res.json(allFavs)
        }
        return res.status(401).send("Falntan datos")
    } catch(error) {
        return res.status(500).send(error.message)
    }
}
*/