/**replaceAll  */
const string = "JavaScript es maravilloso con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);


const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

/**metodos privados #  */

class Message {
    #show(val) {
        console.log(val);
    };
   
}
const message = new Message();
message.show('hola kaki');

/**Promise.any
 * array de pormesas que captura la promesa que tenga
 * respuesta satisfactoria
 */

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

/**WeakRef */

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}

/**asinacion de and logico, or logico y anulacion */

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
