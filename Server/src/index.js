const { conn } = require("./DB_connections");
const server = require("./app")
const PORT = 3001;

server.listen(PORT, async () => {
    await conn.sync({ force: true });
    console.log('Server raised in port: ' + PORT);
});

/* sequelize.sync({ force: true }).then(() =>
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    })
    .catch(error => console.log(error.message))
) */