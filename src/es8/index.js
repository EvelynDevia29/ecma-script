/**  Object.entries crea una matriz*/

const data = {
    frontend:'Monica',
    backend:'Isabel',
    design:'Juana'
};

const entries = Object.entries(data);
console.log(entries);//Muestra una matriz
console.log(entries.length); //saber cuantos elementos hay


/**Trae los valores en un arreglo */
const data = {
    frontend:'Monica',
    backend:'Isabel',
    design:'Juana'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

/**Padding */
const string = 'hello';

console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'-------'));