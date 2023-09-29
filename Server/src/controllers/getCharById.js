const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"


const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`) //promise

        if (!data.name) throw new Error(`Fantan datos del personaje con ID: ${id}`) //evaluamos que tenga propiedad name porque id siempre habrá
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status//construímos char
        }
        return res.status(200).json(character) //.json cuando mándamos js

        //return res.status(404).send("Not found") //.send cuando es texto plano

    } catch (error) {
        return error.message.includes("ID")
            ? res.status(404).send(error.message)
            : res.status(500).send(error.response.data.error)
    }
}

module.exports = { getCharById }

//AXIOS en back
/* const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(({ name, gender, species, origin, image, status }) => {
            const character = {
                id,
                name,
                gender,
                species,
                origin,
                status,
                image
            }

            return res
                .writeHead(200, { "Content-Type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
                .writeHead(500, { "Content-Type": "text/plain" })
                .end(error.message)
        })
}

module.exports = {
    getCharById
} */


//PROMESAS
/* const successH = (response, res) => {
    const { id, name, gender, species, image } = response.data
    res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify({ id, name, gender, species, image }))
}

const errorH = (error, res) => {
    res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(error.message)
}

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => successH(response, res))
        .catch((error) => errorH(error, res))
} */