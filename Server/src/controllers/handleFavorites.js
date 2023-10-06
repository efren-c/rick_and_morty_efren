/* let myFavorites = []

const postFav = (req, res) => {
    try {
        const character = req.body
        const characterFound = myFavorites.find(fav => fav.id === character.id)

        if (characterFound) throw Error("Ya es un personaje favorito")

        myFavorites.push(character);

        return res.status(200).json(myFavorites)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) //pisamos el arr original para mod y no tener dos arr con los favorites, uno sin mod y otro con el filter

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
} */