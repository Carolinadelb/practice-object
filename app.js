// OBJETO LITERAL

const obj = {
  key: 'value'
}

const obj = {
  'key': 'value'
}

// DOS FORMAS DE ACCEDER A UN OBJETO

key.value // dot notation

key['value'] // corchetes

// AGREGAR NUEVAS KEYS

objeto.nuevaPropiedad = nuevoValor

objeto['nuevaPropiedad'] = nuevoValor

// ejemplo objeto literal con método

const laboratorian = {
  gender: 'female',
  techSkills: ['JS', 'Git', 'Github', 'UX', 'HTML5', 'CSS3'],
  // metodo
  study: (condition, skills) => {
    /*
    console.log('Hola mi género es ' + laboratorian.gender + ' y me especializo en ' + laboratorian.techSkills[0]);
    */

    // template string
    console.log(`Hola mi género es ${laboratorian.gender} y me especializo en ${laboratorian.techSkills[0]}`);
  }
}

// accedo al metodo
laboratorian.study()

const bambi = {}

bambi.nombre = 'Loreto';

// CONSTRUCTOR

class Person {
  constructor (name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.hobbies = []
  }

  // metodo: comportamiento del objeto
  enjoy(pasatiempos) {
    this.hobbies.push(pasatiempos)
    return this.hobbies
  }
}

let bambi = new Person('Loreto', 'Female', 28);
let teresita = new Person('Teresita', 'Female', 36);
bambi.enjoy('Leer');


/*
Crear un objeto constructor llamado rectangle que tenga las propiedades base y height
El valor de estas propiedades son los parámetros ingresados
Crea tres instancias y muestra el resultado del área
*/

class Rectangle {
  constructor (base, height) {
    this.base = base,
    this.height = height
  }
  //metodo: comportamiento de mi objeto
  area() {
    return this.base * this.height;
  }
}

let rectangulito = new Rectangle(10, 5);
let rectangulote = new Rectangle(20, 10);
let rectangulais = new Rectangle(15, 5);