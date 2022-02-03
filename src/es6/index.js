//FORMA ANTERIOR DE ASIGNAR PARAMETROS A LA FUNCION
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6 FORMA EN ECMASCRIPT6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//TEMPLATES PARA EL SUSO DE CONCATENACION

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//LET y CONSTANT, Multilínea, Spread Operator
// y Desestructuración

//Antes para una cadena larga en una variable  haciamos:
let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit \n"
  + "Magni, autem numquam doloribus facere accusamus, quis quas neque dolores\n"
  + "nihil vel iste laboriosam commodi veritatis ipsam labore fuga officiis nesciunt. Sunt.\n";

//Ahora con ECMAScript6+ hacemos:
let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica 
  `;
console.log(lorem);
console.log(lorem2);

//************ANTES****************//
let person = {
  'name': 'Monica',
  'age': 40,
  'country': 'Cali'
};

console.log(person.name, person.age, person.country);

//AHORA: Desestructurar el objeto  ECMAScritp6+

let { name, age, country } = person;
console.log(name, age, country);

//********OPERADOR DE PROPAGACION***********//
//Nos permite añadir varios elementos
//Vamos a tener varios arreglos y los vamos a unir para
//solo presentar uno
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Monica'];

let education = ['David', ...team1, ...team2];
console.log(education);

//ahora se usa let para estar disponible solo 
//en el bloque de codigo donde va a ser llamado

{
  var globalVar = 'GLOBAL VAR';
}

{
  let globalLet = 'GLOBAL LET';
  console.log(globalLet);
}

console.log(globalVar);

//Asignacion de constantes
const a = 'b';

a = 'a';
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos

let nombre = 'Monica';
let edad = 40;

////ANTES/////
obj = { nombre: nombre, edad: edad };

////ECMAScript6+/////
obj2 = { nombre, edad };
console.log(obj);
console.log(obj2);

  ////////ANtes para iterar en un objeto haciamos

const nombres = [
  { nombre: 'monica', age: 40 },
  { nombre: 'yesica', age: 25 }
];

let listOfNames = nombres.map(function(){
  console.log(item.nombre);
});

/////Arrow Functions

let listOfNames2 = nombres.map(item => console.log(item.nombre));

const listOfNames3 = (nombre, age)=>{/**lineas de code*/ };


const square = num => num * num;


//PROMESAS**ASINCRONISMO**CALLBACKS
//ALGO VA A PASAR 

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }

  });
};

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hello'))
  .catch(error => console.log(error));

  ///CLASES, MODULOS Y GENERADORES

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
};

const calc = new calculator();
console.log(calc.sumar(2, 8));


////IMPORTACION DE CODIGO DE module.js
import {hello} from './module';
hello();

//GENERATOR **GENERADORES

function* helloWorld() {
  if (true) {
    yield 'hello';
  }
  if (true) {
    yield 'World';
  }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);