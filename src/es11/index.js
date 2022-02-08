/**dinamic import, importacion de elementos de forma 
 * dinamica */

 const button = document.getElementById("btn");

 button.addEventListener("click", async function(){
     const module = await import("./file.js");
     module.hello();
 });

/**BigInt */
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

/** allSettled Devuelve una promesa despues que se han cumplidos otras 
 * promesas
 * Promise.all = se rechaza a penas hay una promesa que sea rechazada
 * mientras que promise.allSetled, no importa el estado de las
 * promesas va a a verificar cada promesa hasta
 * que todas sean resueltas
 */
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


/**global this
 * proporciona una forma estandar de acceder al valor global
 * no solo desde el navegador sino tambien desde nuestras
 * app creadas con node
 */

console.log(globalThis);

/**El operador de nulo, para hacer preguntas segun sea el caso*/

const foo = 'asd' ?? 'default string';
console.log(foo);


/**optional chainning */

const user ={};
console.log(user?.profile?.email);
 
if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}


