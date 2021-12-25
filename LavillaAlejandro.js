// LAVILLA ALEJANDRO - CODERHOUSE ENTREGABLE #1

// Start Clases
class Usuario {
    
    constructor (nombre,apellido,libros,mascotas) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.libros   = libros;
        this.mascotas = mascotas;
    }

    getFullName(mode = 0) {
        // Sí mode es 0 por default o asignado, devolvera primero el nombre.
        let user_full;
        mode == 0 ? user_full = `${this.nombre} ${this.apellido}` :  user_full = `${this.apellido} ${this.nombre}`
        return user_full;
    }

    addMascota(nombreMascota) {
        this.mascotas.push({
            nombre:nombreMascota
        }) 
}

    countMascotas() {
    const CANTIDAD_MASCOTAS = Array.isArray(this.mascotas) ? this.mascotas.length : 0;  
    return CANTIDAD_MASCOTAS;
    }

    addBook(nombre,autor) {
        this.libros.push({
            nombre:nombre,
            autor:autor
        }) 
}

    getBookNames() {
        let BIBLIOTECA_NOMBRES = new Array
        this.libros.forEach(libro => {
            BIBLIOTECA_NOMBRES.push(libro.nombre) 
        });
        return BIBLIOTECA_NOMBRES
    }


}
// End Clases


//Start main

let librosUser = [
    {
    nombre:"Harry Potter y la Piedra Filosofal",
    autor:"JK Rowling"
    },{    
    nombre:"El Hobbit",
    autor :"J.R.R. Tolkien"}]


let mascotasUser = [
    {
    nombre:"Beethoven",
    tipo  : "Perro",
    raza  :"San Bernardo",
    edad  :5
    },{
    nombre:"Rufian",
    tipo  :"Felino",
    raza  :"Siames",
    edad  :5}]


let newUser = new Usuario("Alejandro","Lavilla",librosUser,mascotasUser);

console.log (newUser.getFullName());
newUser.addMascota("Perrinio")
console.log (newUser.mascotas);
console.log (newUser.countMascotas())
console.log (newUser.addBook("El principito","Saint-Exupery"))
console.log (newUser.libros)
console.log (newUser.getBookNames());


//End main

// LAVILLA ALEJANDRO - CODERHOUSE ENTREGABLE #1
