const app = require('../src/app')
const session = require('supertest')
const request = session(app)

const character = {
    id: 123,
    name: "Limona",
    species: "Cat",
    gender: "Female",
    status: "Alive",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpeg"
}

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
            // await request.get('/rickandmorty/character/1').expect(200)
        })
        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
            const response = await request.get('/rickandmorty/character/1')
            for (const prop in character) {
                expect(response.body).toHaveProperty(prop)
            }
        })
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/0')
            expect(response.statusCode).toBe(500)
        })
    })


    const access = { access: true }
    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto la propiedad access en true si la información del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=efren@soyhenry.com&password=efren42Hen')
            expect(response.body).toEqual(access)
        })

        it("Responde con un objeto la propiedad access en false si la información del usuario no es válida", async () => {
            const response = await request.get('/rickandmorty/login?efrn@soyhenry.com&password=efren42Henr')
            access.access = false
            expect(response.body).toEqual(access)
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body).toContainEqual(character)
        })
        it("Debe agregar personajes a favoritos sin eliminar los queya existían", async () => {
            character.id = 1337
            character.name = "Mandarina"
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe debería retornar un array con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2')
            expect(response.body.length).toBe(2)
        })

        it("Si el ID existe debería de eliminarlo de favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/1337')
            expect(response.body.length).toBe(1)
        })
    })
})