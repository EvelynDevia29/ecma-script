/**NIVELES EN ARREGLOS, FLAT -->PROFUNDIDAD */

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

/** FLAPMAP*/
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

/**PRINSTART ME PERMITE ELIMINAR ESPACIOS 
 * EN BLANCO DE UN STRING*/

let hello = '              hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world'                  ;
console.log(hello);
console.log(hello.trimEnd());

/**OPTIONAL CATCH BINDING */
try{

}catch(error){
error
}

/**fromEntries--> devuelve un objeto construido con
 * la clave valor de cada uno de los elemnetos que 
 * estan dentro del arreglo
 * pudiendo tranformar de arreglo a objetos o
 * de objetos a arreglos */

let entries = [["nombre","Monica"],["edad",40]];
console.log(Object.fromEntries(entries));


/**Objeto de tipo simbolo */
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);