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

async function main() {
    const contenedor = new ClaseContenedor('./productos.txt')

    await contenedor.save(objEscuadra)
    await contenedor.save(objCalculadora)
    await contenedor.save(objGlobo)

    const objects = await contenedor.getAll()
    console.log(`--- Objetos:\n`, objects)

    const objId1 = await contenedor.getById(1)
    const objId2 = await contenedor.getById(2)
    const objId3 = await contenedor.getById(3)

    console.log(`--- Objeto cID 1:\n`, objId1)
    console.log(`--- Objeto ID 2:\n`, objId2)
    console.log(`--- Objeto ID 3:\n`, objId3)

    await contenedor.deleteById(2)
    const objectsmenos2 = await contenedor.getAll()
    console.log(`--- Objetos menos dos:\n`, objectsmenos2)

    await contenedor.deleteAll()
    const objectsTruncate = await contenedor.getAll()
    console.log(`--- Objetos vacios:\n`, objectsTruncate)
}

main()