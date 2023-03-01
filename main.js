
class Pelicula {
    constructor(titulo, director, genero, año) {
    this.titulo = titulo;
    this.director = director;
    this.genero = genero;
    this.año = año;
    }
}

const peliculas = [
    new Pelicula("The Godfather", "Francis Ford Coppola", "Drama", 1972),
    new Pelicula("The Shawshank Redemption", "Frank Darabont", "Drama", 1994),
    new Pelicula("The Dark Knight", "Christopher Nolan", "Acción", 2008),
    new Pelicula("Forrest Gump", "Robert Zemeckis", "Drama", 1994),
    new Pelicula("The Matrix", "Lana Wachowski, Lilly Wachowski", "Ciencia ficción", 1999),
    new Pelicula("El Padrino", "Francis Ford Coppola", 1972),
    new Pelicula("Titanic", "James Cameron", 1997),
    new Pelicula("Star Wars", "George Lucas", 1977),
    new Pelicula("La La Land", "Damien Chazelle", 2016),
    new Pelicula("El Rey León", "Roger Allers", 1994)
];


    console.log(peliculas[0].titulo);
    console.log(peliculas[1].año);
    console.log(peliculas[2].genero);
    console.log(peliculas);
    console.log(Pelicula);