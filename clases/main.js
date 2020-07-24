// Objeto literal 

// let autoVerde = {
//     color: 'verde',
//     velocidad : 100,
//     ruedas : 4,
//     motor : 'v8',


//     arrancar(){
//         console.log('arranco')
//     },
//     frenar(){
//         console.log('freno')
//     },
//     doblar(){
//         console.log('doblo')
//     }

// }


// Clases  

class Coche  {
    //para inicializar las propiedades de la clase
    constructor(color, velocidad , ruedas , motor){ 
             this.color = color;
             this.velocidad = velocidad;
             this.ruedas = ruedas;
             this.motor = motor; 
             

    } 


    arrancar(){
        console.log(`Estr carro arranca con motor ${this.motor}`)
    }


    pintar(color){
        this.color = color
    }

    agregarLlanta (cantidad){
        this.ruedas += cantidad
    }

  
}

let coche1 = new Coche('blanco', 200 , 4, 'v7')
// console.log(coche1)
// coche1.pintar('morado')

// console.log(coche1)
// coche1.agregarLlanta(5)
// console.log(coche1)



class Persona {
    constructor(nombre, edad, sexo,peso,altura){
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.peso = peso;
            this.altura = altura;


    }


    calcularIMC(){

    }

    esMayorDeEdad(){
        if( this.edad >= 18){
            console.log('Eres Mayor de edad')
        } else {
            console.log('No eres mayor de edad')
        }
    }





}


let karla = new Persona('Karla', 25 , 'F', 64 ,160 )

console.log(karla)

karla.esMayorDeEdad()