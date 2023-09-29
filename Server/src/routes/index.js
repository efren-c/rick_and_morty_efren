const { login } = require("../controllers/login")
const { getCharById } = require("../controllers/getCharById")
const { postFav, deleteFav } = require("../controllers/handleFavorites")
const router = require("express").Router()

router.get("/character/:id", (req, res) => {
    getCharById(req, res)
})

//router.get("/character/:id", getCharById)

router.get("/login", (req, res) => {
    login(req, res)
})

// router.get("/login", login) modo refactorizado

router.post("/fav", (req, res) => {
    postFav(req, res)
})

//router.get("/fav", postFav)

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})

//router.delete("/fav/:id", deleteFav)

module.exports = router