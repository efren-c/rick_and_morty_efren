const { Favorite } = require("../DB_connections")

const deleteFav = async (req, res) => {
    const { id } = req.params

    try {
        await Favorite.destroy({ where: { id } })
        const allFavs = await Favorite.findAll()
        return res.status(200).json(allFavs)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = deleteFav