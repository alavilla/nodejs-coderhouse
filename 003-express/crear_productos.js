const ClaseContenedor = require('./contenedor.js')

const objEscuadra = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://www.pinclipart.com/picdir/big/12-121181_bullet-holes-clipart-angulos-de-15-grados-con.png'
}                                                                                                                                       

const objCalculadora = {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://png.pngtree.com/element_our/png_detail/20190103/calculator-vector-icon-png_308914.jpg'
}

const objGlobo = {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn-icons-png.flaticon.com/512/326/326887.png'
}                                                                                                                                                    

async function crearProductos() {
    const contenedor = new ClaseContenedor('./productos.txt')

    await contenedor.deleteAll() //vacio los productos

    await contenedor.save(objEscuadra)
    await contenedor.save(objCalculadora)
    await contenedor.save(objGlobo)
    
    return await contenedor.getAll()
}

module.exports = crearProductos