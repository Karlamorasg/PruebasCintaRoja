// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia
// https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)


    let myPenguin ={
        nombre: 'Capitán Cook',
        origen: 'Pingüinos del señor Popper',
        autor: 'Richard y Florence Atwater',

        graznar: function() {
        console.log('Y sueno asi :  "kaww kaww!!" ')
        }

    }


// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"

console.log(` Hola, soy un pingüino y mi nombre es ${myPenguin.nombre}`)


// 3.- Escribe otra línea de código que añada una nueva propiedad a tu
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino

myPenguin.puedeVolar = true;
console.log(myPenguin)


// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.

myPenguin.graznar()

 //WikipediaWikipedia
//List of fictional penguins
//This list of fictional penguins is subsidiary to the list of fictional birds and is a collection of various notable penguin characters that appear in various works of fiction. It is limited to well-referenced examples of penguins in literature, film, television, comics, animation, and video games.


const [, ... arr]= ["1", "2", "3"].map((x) => x + +2)
debugger
console.log(arr)