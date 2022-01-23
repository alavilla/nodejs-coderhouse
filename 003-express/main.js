const express = require('express')
const crearProductos = require('./crear_productos.js')

async function main() {
    const productos = await crearProductos()
    const app = express()

    app.get('/productos', (req, res) => {
        res.send(productos)
    })
     
    app.get('/productoRandom', (req, res) => {
        const indexRandom = parseInt(Math.random() * productos.length)
        res.send(productos[indexRandom])
    })

    const PORT = process.env.PORT || 8080
    
    const server = app.listen(PORT, () => {
        console.log(`Vee, escuchando en el puerto ${server.address().port}`)
     })
    
    server.on("error", error => console.log(`Error en servidor ${error}`))
}

main()
