//objetos literales


let persona = {
    nombre: 'karla',
    apellido: 'Mora',
    edad: 27,
    pais: 'CR',

    saludar(){
        console.log(`hola me llamo ${persona.nombre}`)
    },

    despedir(){
        console.log(`Y ya me voy para ${persona.pais}`)
    },

    //ec6
      gritar: function(){
        console.log('estoy gritandoooooooo')
    }

}


persona.saludar();
persona.despedir()



let perrito= {
    color: 'gris',
    patas : 3,
    tienePelo : false,
    nombre : 'pepe',

    //metodos
    ladrar: function(){
        console.log('guauuuu')
    },

    comer: function(){
        console.log('como')
    }

}

console.log(p)