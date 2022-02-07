/**OPERADOR DE REPOSO PARA OBJETOS AUN NO CONSTRUIDOS */
//OPERADOR DE PROPAGACION
const obj = {
    nombre: 'Monica',
    age:40,
    country:'Cali'
};

let {country,...all} = obj;
console.log(all);

/**UNIR ELEMENTOS DE OBJETOS A UN NUEVO OBJETO */
const obj = {
    nombre: 'Monica',
    age:40,
    country:'Cali'
};

const obj1 = {
  ...obj,
  country: 'Bogota'  
};
console.log(obj1);

/**promise.finally  SABEMOS CUANDO HA TERMINADO EL LLAMADO Y 
 * PODER EJECUTAR ALGUNA FUNCION O LOGICA DE COPDIGO  */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))

    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


////****** //
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))

    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

////REJECTS HA UN GRUPO
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day= match[3];
console.log(year,month,day);

